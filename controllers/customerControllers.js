import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  Customer,
  CustomerCardData,
  CustomerInsuranceData,
  CustomerLoanData,
} from "../models/customerModels.js";
import nodemailer from "nodemailer";
// import crypto from "crypto";

const secretKey = process.env.SECRET_KEY;

// Generate a secure random verification code
// const generateVerificationCode = () => {
//   return crypto.randomBytes(32).toString("hex");
// };

// create transporter for sending mail
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "support@addrupee.com",
    pass: "AddRupee@741Support",
  },
});

export const verifyUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({
      Error: "You are not authenticated",
    });
  } else {
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.json({
          Error: "Token is not Okay",
        });
      } else {
        try {
          const user = await Customer.findOne({ email: decoded.email });

          if (user) {
            req.name = user.name;
            req.email = user.email;
            next();
          } else {
            return res.json({
              Error: "User not found",
            });
          }
        } catch (error) {
          return res.json({
            Error: "Error fetching user",
          });
        }
      }
    });
  }
};

export const getCustomerData = (req, res) => {
  return res.json({
    Status: "Success",
    name: req.name,
    email: req.email,
  });
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const registerCustomer = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.password
    ) {
      return res.json({
        Error: "All fields are required. Please fill in all the fields.",
      });
    }

    if (!isValidEmail(req.body.email)) {
      return res.json({
        Error: "Invalid email format. Please provide a valid email address.",
      });
    }

    if (req.body.password.length < 6) {
      return res.json({
        Error: "Password must be at least 6 characters or digits.",
      });
    }

    const existingUser = await Customer.findOne({
      $or: [{ email: req.body.email }, { phone: req.body.phone }],
    });

    if (existingUser) {
      return res.json({
        Error:
          "User already exists. Please use a different email or phone number.",
      });
    }

    const newCustomer = new Customer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

    // const verificationCode = generateVerificationCode();

    // const mailOptions = {
    //   from: "support@addrupee.com",
    //   to: req.body.email,
    //   subject: "Email Verification",
    //   html: `
    //   <p>Click the following link to verify your email:</p>
    //   <a href="https://addrupee.com/pages/customeremailverification/${verificationCode}">Verify</a>
    // `,
    // };

    const mailOptions = {
      from: "support@addrupee.com",
      to: req.body.email,
      subject:
        "Congratulations! Welcome to AddRupee - Your Trusted Partner in Financial Solutions",
      html: `
        <p>Dear ${req.body.name},</p>
        
        <p>Congratulations and welcome to AddRupee - Your Gateway to Tailored Financial Solutions!</p>
    
        <p>We are excited to have you join our community. At AddRupee, we are committed to helping you achieve your financial goals by providing access to a variety of services, including secured loans, unsecured loans, cards, investments, and saving options.</p>
    
        <p>Your journey to financial empowerment starts now! Feel free to explore our platform and make the most of the comprehensive market offerings available at your fingertips.</p>
    
        <p>If you have any questions or need assistance, our dedicated support team is here to help. Reach out to us at:</p>
    
        <p>Email: support@addrupee.com</p>
        <p>Website: www.addrupee.com</p>
    
        <p>Thank you for choosing AddRupee. We look forward to being a valuable part of your financial journey!</p>
    
        <p>Best Regards,</p>
        <p>AddRupee Team</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // newCustomer.verificationCode = verificationCode;
    await newCustomer.save();

    return res.json({
      Status: "Success",
      // Message: "Mail has been sent successfully. Please verify your email.",
      Message: "You are successfully registered",
      // verificationCode: verificationCode,
    });
  } catch (error) {
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const CustEmailVerification = async (req, res) => {
  // const { code } = req.params;
  // try {
  //   const user = await Customer.findOne({ verificationCode: code });
  //   if (user) {
  //     if (!user.is_verified) {
  //       user.is_verified = true;
  //       // user.verificationCode = ""; // Clear the verification code
  //       await user.save();
  //       return res.json({
  //         Status: "Success",
  //         Message: "Email verified successfully.",
  //         VerificationStatus: "Verified",
  //       });
  //     } else {
  //       return res.json({
  //         Status: "Success",
  //         Message: "Email already verified.",
  //         VerificationStatus: "AlreadyVerified",
  //       });
  //     }
  //   } else {
  //     return res.status(400).json({ Error: "Invalid verification code." });
  //   }
  // } catch (error) {
  //   return res.status(500).json({ Error: "Internal Server Error" });
  // }
};

export const loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  const user = await Customer.findOne({ email });

  if (!user) {
    return res.json({ Error: "No Such Email Existed" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const { name, email } = user;
    try {
      const token = jwt.sign({ email, name }, secretKey, {
        expiresIn: "8h",
      });
      res.cookie("token", token);
    } catch (error) {
      return res.json({
        Error: "JWT Token Generation Error",
      });
    }

    return res.json({ Status: "Success", name, email });
  } else {
    return res.json({ Error: "Password not Matched" });
  }
};

export const CustforgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Customer.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: "No Such Email Existed" });
    }

    const token = jwt.sign(
      { id: user._id, exp: Math.floor(Date.now() / 1000) + 2 * 60 },
      secretKey
    );

    const mailOptions = {
      from: "support@addrupee.com",
      to: req.body.email,
      subject: "For Reset Password",
      html: `
          <p>Click the following link to Reset your Password and This Link will expire in 2 min:</p>
          <a href="https://addrupee.com/pages/customerresetpassword/${user._id}/${token}">Reset</a>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: "Failed to send email" });
      } else {
        return res.json({
          status: "Success",
          message: "Mail Sent Successfully! Check Your Gmail",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const CustresetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(404).json({ error: "Link not found or expired" });
        } else {
          return res.status(400).json({ error: "Invalid token" });
        }
      } else {
        bcrypt
          .hash(password, 10)
          .then((hash) => {
            Customer.findByIdAndUpdate({ _id: id }, { password: hash })
              .then(() => res.json({ status: "Success" }))
              .catch((err) => {
                res.status(500).json({ error: "Internal Server Error" });
              });
          })
          .catch((err) => {
            res.status(500).json({ error: "Internal Server Error" });
          });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logoutCustomer = (req, res) => {
  res.clearCookie("token");
  res.json({ Status: "Success" });
};

export const customerLoanApply = async (req, res) => {
  const formData = req.body;

  try {
    const customerLoanData = new CustomerLoanData(formData);
    const mailOptions = {
      from: "support@addrupee.com",
      to: req.body.mailId,
      subject:
        "Congratulations! AddRupee - Your Trusted Partner in Financial Solutions",
      html: `
        <p>Dear ${req.body.customerName},</p>
        
        <p>Congratulations! Your loan application has been successfully submitted to AddRupee.</p>
    
        <p>We understand that financial decisions are significant, and we appreciate the trust you've placed in us. Our team is now diligently reviewing your application to provide you with the best possible outcome.</p>
    
        <p>Here are the details of your loan application:</p>
    
        <ul>
          <li><strong>Loan Type:</strong> ${req.body.loanType}</li>
          <li><strong>Loan Amount:</strong> ${req.body.appliedAmount}</li>
          <li><strong>Applied Bank:</strong> ${req.body.bankName}</li>
        </ul>
    
        <p>Rest assured, we will keep you updated on the status of your application. If we require any additional information, our team will reach out to you promptly.</p>
    
        <p>If you have any questions or need further assistance, feel free to contact our dedicated support team at:</p>
    
        <p>Email: support@addrupee.com</p>
        <p>Website: www.addrupee.com</p>
    
        <p>Thank you for choosing AddRupee. We appreciate the opportunity to assist you in achieving your financial goals.</p>
    
        <p>Best Regards,</p>
        <p>AddRupee Team</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    await customerLoanData.save();

    res.status(200).json({
      message: "Form submitted successfully! Our Team will connect you soon",
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to submit the form", details: err.message });
  }
};

export const customerCardApply = async (req, res) => {
  try {
    const customerCardData = req.body;
    const newCustomerCard = new CustomerCardData(customerCardData);
    const mailOptions = {
      from: "support@addrupee.com",
      to: req.body.mailId,
      subject:
        "Congratulations! AddRupee - Your Trusted Partner in Financial Solutions",
      html: `
        <p>Dear ${req.body.customerName},</p>
        
        <p>Congratulations! Your credit card application has been successfully submitted to AddRupee.</p>
    
        <p>We appreciate your choice in selecting AddRupee for your financial needs. Our team is now carefully reviewing your credit card application to ensure a smooth process and provide you with the best possible offer.</p>
    
        <p>Here are the details of your credit card application:</p>
    
        <ul>
          <li><strong>Imployment Type:</strong> ${req.body.ImploymentType}</li>
          <li><strong>Per Month Salary:</strong> ${req.body.PerMonthSalary}</li>
          <li><strong>Applied Bank:</strong> ${req.body.bankName}</li>
        </ul>
    
        <p>Rest assured, we will keep you informed about the status of your application. If any additional information is needed, our team will reach out to you promptly.</p>
    
        <p>If you have any questions or need further assistance, feel free to contact our dedicated support team at:</p>
    
        <p>Email: support@addrupee.com</p>
        <p>Website: www.addrupee.com</p>
    
        <p>Thank you for choosing AddRupee. We are here to help you make the most of your financial opportunities.</p>
    
        <p>Best Regards,</p>
        <p>AddRupee Team</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const savedCustomerCard = await newCustomerCard.save();
    res.status(201).json(savedCustomerCard);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const customerInsuranceApply = async (req, res) => {
  const formData = req.body;

  try {
    const customerInsuranceData = new CustomerInsuranceData(formData);
    const mailOptions = {
      from: "support@addrupee.com",
      to: req.body.mailId,
      subject:
        "Congratulations! AddRupee - Your Trusted Partner in Financial Solutions",
      html: `
        <p>Dear ${req.body.customerName},</p>
        
        <p>Congratulations! Your insurance application has been successfully submitted to AddRupee.</p>
    
        <p>We understand the importance of protecting what matters most to you, and we appreciate your trust in choosing AddRupee for your insurance needs. Our team is now diligently reviewing your application to ensure comprehensive coverage and provide you with the best possible options.</p>
    
        <p>Here are the details of your loan application:</p>
    
        <ul>
          <li><strong>Imployment Type:</strong> ${req.body.ImploymentType}</li>
          <li><strong>Per Month Salary:</strong> ${req.body.PerMonthSalary}</li>
          <li><strong>Mobile No:</strong> ${req.body.mobileNo}</li>
        </ul>
    
        <p>Rest assured, we will keep you informed about the status of your application. If any additional information is needed, our team will reach out to you promptly.</p>
    
        <p>If you have any questions or need further assistance, feel free to contact our dedicated support team at:</p>
    
        <p>Email: support@addrupee.com</p>
        <p>Website: www.addrupee.com</p>
    
        <p>Thank you for choosing AddRupee. We are committed to helping you secure a brighter and more protected future.</p>
    
        <p>Best Regards,</p>
        <p>AddRupee Team</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    await customerInsuranceData.save();

    res.status(200).json({
      message: "Form submitted successfully! Our Team will connect you soon",
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to submit the form", details: err.message });
  }
};
