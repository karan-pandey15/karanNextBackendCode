import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import crypto from "crypto";
import moment from "moment";
import {
  PDisbursedData,
  PEmployee,
  PFormalData,
  PPendingFormData,
  PRejectedData,
} from "../models/partnerModels.js";

const secretKey = process.env.SECRET_KEY;

// Generate a secure random verification code
const generateVerificationCode = () => {
  return crypto.randomBytes(32).toString("hex");
};

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

// verify user middleware
export const PverifyUser = async (req, res, next) => {
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
          const user = await PEmployee.findOne({ email: decoded.email });

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

// get User Login data
export const PgetUserData = (req, res) => {
  return res.json({
    Status: "Success",
    name: req.name,
    email: req.email,
  });
};

// Adding this function to validate the email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// register employee for the first time
export const PregisterEmployee = async (req, res) => {
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

    const existingUser = await PEmployee.findOne({
      $or: [{ email: req.body.email }, { phone: req.body.phone }],
    });

    if (existingUser) {
      return res.json({
        Error:
          "User already exists. Please use a different email or phone number.",
      });
    }

    const newEmployee = new PEmployee({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      TL_Name: req.body.TL_Name,
      Branch_Name: req.body.Branch_Name,
      userType: req.body.userType,
    });

    const verificationCode = generateVerificationCode();

    const mailOptions = {
      from: "support@addrupee.com",
      to: req.body.email,
      subject: "Email Verification",
      html: `
        <p>Click the following link to verify your email:</p>
        <a href="http://localhost:3000/partner/emailverification/${verificationCode}">Verify</a>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    newEmployee.verificationCode = verificationCode;
    await newEmployee.save();

    return res.json({
      Status: "Success",
      Message: "Mail has been sent successfully. Please verify your email.",
      verificationCode: verificationCode,
    });
  } catch (error) {
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

// email verification for employee
export const PemailVerification = async (req, res) => {
  const { code } = req.params;

  try {
    const user = await PEmployee.findOne({ verificationCode: code });

    if (user) {
      if (!user.is_verified) {
        user.is_verified = true;
        // user.verificationCode = ""; // Clear the verification code
        await user.save();

        return res.json({
          Status: "Success",
          Message: "Email verified successfully.",
          VerificationStatus: "Verified",
        });
      } else {
        return res.json({
          Status: "Success",
          Message: "Email already verified.",
          VerificationStatus: "AlreadyVerified",
        });
      }
    } else {
      return res.status(400).json({ Error: "Invalid verification code." });
    }
  } catch (error) {
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

// login employee api
export const PloginEmployee = async (req, res) => {
  const { email, password } = req.body;

  const user = await PEmployee.findOne({ email });

  if (!user) {
    return res.json({ Error: "No Such Email Existed" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const { name, userType, email } = user;
    try {
      const token = jwt.sign({ email, userType, name }, secretKey, {
        expiresIn: "8h",
      });
      res.cookie("token", token);
    } catch (error) {
      return res.json({
        Error: "JWT Token Generation Error",
      });
    }

    return res.json({ Status: "Success", userType, name, email });
  } else {
    return res.json({ Error: "Password not Matched" });
  }
};

// forgot password api for employee
export const PforgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await PEmployee.findOne({ email: email });

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
            <a href="http://localhost:3000/partner/resetpassword/${user._id}/${token}">Reset</a>
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

// reset password api for employee
export const PresetPassword = async (req, res) => {
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
            PEmployee.findByIdAndUpdate({ _id: id }, { password: hash })
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

// logout employee api
export const PlogoutEmployee = (req, res) => {
  res.clearCookie("token");
  res.json({ Status: "Success" });
};

//  AddLeads all data send to database with this API
export const PemployeeFormAllData = async (req, res) => {
  const data = req.body;

  try {
    const employeeEmail = req.body.email;
    const formalData = new PFormalData({
      ...data,
      email: employeeEmail,
    });
    await formalData.save();

    const pendingFormData = new PPendingFormData({
      ...data,
      email: employeeEmail,
    });
    await pendingFormData.save();

    res.status(200).json({ message: "Form data submitted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to submit the form", details: err.message });
  }
};

// fetch data for employee from FormalData with this API
export const PAddleadsAlldata = async (req, res) => {
  try {
    let query = {};
    const { email } = req.params;
    const { filter, bankFilter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Upload_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Upload_Date: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            Upload_Date: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            Upload_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
      if (bankFilter && bankFilter !== "all") {
        query.Bank_Name = bankFilter;
      }
    }

    if (!email) {
      const data = await PFormalData.find({ ...query });
      return res.status(200).json(data);
    }

    const userData = await PFormalData.find({ email, ...query });

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided email" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from pendingFormData with this API
export const PfetchPendingData = async (req, res) => {
  try {
    let query = {};
    const { email } = req.params;
    const { Status, filter, bankFilter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Upload_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Upload_Date: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            Upload_Date: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            Upload_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
      if (bankFilter && bankFilter !== "all") {
        query.Bank_Name = bankFilter;
      }
    }

    if (!email) {
      const data = await PPendingFormData.find({ ...query });
      return res.status(200).json(data);
    }

    let userData;

    if (Status) {
      userData = await PPendingFormData.find({ email, Status, ...query });
    } else {
      userData = await PPendingFormData.find({ email, ...query });
    }

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided email" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Pending Data after submit API
export const PdeletePendingData = async (req, res) => {
  const id = req.params.id;
  try {
    await PPendingFormData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit data for employee from DisbursedData with this API
export const PsendApprovedData = async (req, res) => {
  const {
    Status,
    Product_Loan,
    Bank_Name,
    Customer_Name,
    Father_Name,
    Mother_Name,
    Mobile,
    Personal_Email,
    Pan_Card,
    Customer_Location,
    Company_Name,
    Dob,
    Login_Date,
    Gender,
    Religion,
    Income_Source,
    Marital_Status,
    Spouse_Name,
    Qualification,
    Property_Status,
    Aadhar_Card_No,
    Current_Address_Line1,
    Current_Address_Line2,
    Current_City,
    Current_Landmark,
    Current_State,
    Current_Pin,
    Permanent_Address_Line1,
    Permanent_Address_Line2,
    Permanent_City,
    Permanent_Landmark,
    Permanent_State,
    Permanent_Pin,
    Designation,
    Current_Company_Work_Experience,
    Total_Work_Experience,
    Company_Type,
    Official_Mail,
    Company_Address,
    Company_City,
    Company_State,
    Company_Pin,
    Salary_Account_BankName,
    Annual_Ctc,
    Net_Salary,
    Obligations,
    Scheme_Offered,
    Loan_Amount_Applied,
    Tenure_Of_Loan,
    Credit_Card_Obligation,
    Reference1_FullName_Relative,
    Reference1_MobileNo,
    Reference1_Address1,
    Reference1_City,
    Reference1_State,
    Reference1_Pin,
    Reference2_FullName_Friend,
    Reference2_MobileNo,
    Reference2_Address1,
    Reference2_City,
    Reference2_State,
    Reference2_Pin,
    Caller_Name,
    TL_Name,
    Manager_Name,
    Disbursal_BankName,
    Loan_Application_No,
    Approved_Amount,
    Disbursal_Loan_Amount,
    Inhand_Disb_Account,
    Bt_Disb_Amount,
    Top_Up,
    Cibil,
    Tenure_Disbursal,
    Roi,
    Pf,
    Insurance,
    Emi,
    First_Emi_Date,
    Scheme,
    Login_Bank,
    Disbursal_Date,
    Dsa_Channel_Name,
    Rejection_Date,
    Rejection_Remark,
    Rejection_Description,
    email,
  } = req.body;

  const disbursedData = new PDisbursedData({
    Status,
    Product_Loan,
    Bank_Name,
    Customer_Name,
    Father_Name,
    Mother_Name,
    Mobile,
    Personal_Email,
    Pan_Card,
    Customer_Location,
    Company_Name,
    Dob,
    Login_Date,
    Gender,
    Religion,
    Income_Source,
    Marital_Status,
    Spouse_Name,
    Qualification,
    Property_Status,
    Aadhar_Card_No,
    Current_Address_Line1,
    Current_Address_Line2,
    Current_City,
    Current_Landmark,
    Current_State,
    Current_Pin,
    Permanent_Address_Line1,
    Permanent_Address_Line2,
    Permanent_City,
    Permanent_Landmark,
    Permanent_State,
    Permanent_Pin,
    Designation,
    Current_Company_Work_Experience,
    Total_Work_Experience,
    Company_Type,
    Official_Mail,
    Company_Address,
    Company_City,
    Company_State,
    Company_Pin,
    Salary_Account_BankName,
    Annual_Ctc,
    Net_Salary,
    Obligations,
    Scheme_Offered,
    Loan_Amount_Applied,
    Tenure_Of_Loan,
    Credit_Card_Obligation,
    Reference1_FullName_Relative,
    Reference1_MobileNo,
    Reference1_Address1,
    Reference1_City,
    Reference1_State,
    Reference1_Pin,
    Reference2_FullName_Friend,
    Reference2_MobileNo,
    Reference2_Address1,
    Reference2_City,
    Reference2_State,
    Reference2_Pin,
    Caller_Name,
    TL_Name,
    Manager_Name,
    Disbursal_BankName,
    Loan_Application_No,
    Approved_Amount,
    Disbursal_Loan_Amount,
    Inhand_Disb_Account,
    Bt_Disb_Amount,
    Top_Up,
    Cibil,
    Tenure_Disbursal,
    Roi,
    Pf,
    Insurance,
    Emi,
    First_Emi_Date,
    Scheme,
    Login_Bank,
    Disbursal_Date,
    Dsa_Channel_Name,
    Rejection_Date,
    Rejection_Remark,
    Rejection_Description,
    email,
  });

  try {
    await disbursedData.save();
    res.status(200).json({ message: "Data submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch data for employee from DisbursedData with this API
export const PfetchApprovedData = async (req, res) => {
  try {
    let query = {};

    const { email } = req.params;
    const { Status, filter, bankFilter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Upload_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Upload_Date: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            Upload_Date: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            Upload_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
      if (bankFilter && bankFilter !== "all") {
        query.Bank_Name = bankFilter;
      }
    }

    if (!email) {
      const data = await PDisbursedData.find({ ...query });
      return res.status(200).json(data);
    }

    let userData;

    if (Status) {
      userData = await PDisbursedData.find({ email, Status, ...query });
    } else {
      userData = await PDisbursedData.find({ email, ...query });
    }

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided email" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Submit data for employee from RejectedData with this API
export const PsendRejectedData = async (req, res) => {
  const {
    Status,
    Product_Loan,
    Bank_Name,
    Customer_Name,
    Father_Name,
    Mother_Name,
    Mobile,
    Personal_Email,
    Pan_Card,
    Customer_Location,
    Company_Name,
    Dob,
    Login_Date,
    Gender,
    Religion,
    Income_Source,
    Marital_Status,
    Spouse_Name,
    Qualification,
    Property_Status,
    Aadhar_Card_No,
    Current_Address_Line1,
    Current_Address_Line2,
    Current_City,
    Current_Landmark,
    Current_State,
    Current_Pin,
    Permanent_Address_Line1,
    Permanent_Address_Line2,
    Permanent_City,
    Permanent_Landmark,
    Permanent_State,
    Permanent_Pin,
    Designation,
    Current_Company_Work_Experience,
    Total_Work_Experience,
    Company_Type,
    Official_Mail,
    Company_Address,
    Company_City,
    Company_State,
    Company_Pin,
    Salary_Account_BankName,
    Annual_Ctc,
    Net_Salary,
    Obligations,
    Scheme_Offered,
    Loan_Amount_Applied,
    Tenure_Of_Loan,
    Credit_Card_Obligation,
    Reference1_FullName_Relative,
    Reference1_MobileNo,
    Reference1_Address1,
    Reference1_City,
    Reference1_State,
    Reference1_Pin,
    Reference2_FullName_Friend,
    Reference2_MobileNo,
    Reference2_Address1,
    Reference2_City,
    Reference2_State,
    Reference2_Pin,
    Caller_Name,
    TL_Name,
    Manager_Name,
    Disbursal_BankName,
    Loan_Application_No,
    Approved_Amount,
    Disbursal_Loan_Amount,
    Inhand_Disb_Account,
    Bt_Disb_Amount,
    Top_Up,
    Cibil,
    Tenure_Disbursal,
    Roi,
    Pf,
    Insurance,
    Emi,
    First_Emi_Date,
    Scheme,
    Login_Bank,
    Disbursal_Date,
    Dsa_Channel_Name,
    Rejection_Date,
    Rejection_Remark,
    Rejection_Description,
    email,
  } = req.body;

  const rejectedData = new PRejectedData({
    Status,
    Product_Loan,
    Bank_Name,
    Customer_Name,
    Father_Name,
    Mother_Name,
    Mobile,
    Personal_Email,
    Pan_Card,
    Customer_Location,
    Company_Name,
    Dob,
    Login_Date,
    Gender,
    Religion,
    Income_Source,
    Marital_Status,
    Spouse_Name,
    Qualification,
    Property_Status,
    Aadhar_Card_No,
    Current_Address_Line1,
    Current_Address_Line2,
    Current_City,
    Current_Landmark,
    Current_State,
    Current_Pin,
    Permanent_Address_Line1,
    Permanent_Address_Line2,
    Permanent_City,
    Permanent_Landmark,
    Permanent_State,
    Permanent_Pin,
    Designation,
    Current_Company_Work_Experience,
    Total_Work_Experience,
    Company_Type,
    Official_Mail,
    Company_Address,
    Company_City,
    Company_State,
    Company_Pin,
    Salary_Account_BankName,
    Annual_Ctc,
    Net_Salary,
    Obligations,
    Scheme_Offered,
    Loan_Amount_Applied,
    Tenure_Of_Loan,
    Credit_Card_Obligation,
    Reference1_FullName_Relative,
    Reference1_MobileNo,
    Reference1_Address1,
    Reference1_City,
    Reference1_State,
    Reference1_Pin,
    Reference2_FullName_Friend,
    Reference2_MobileNo,
    Reference2_Address1,
    Reference2_City,
    Reference2_State,
    Reference2_Pin,
    Caller_Name,
    TL_Name,
    Manager_Name,
    Disbursal_BankName,
    Loan_Application_No,
    Approved_Amount,
    Disbursal_Loan_Amount,
    Inhand_Disb_Account,
    Bt_Disb_Amount,
    Top_Up,
    Cibil,
    Tenure_Disbursal,
    Roi,
    Pf,
    Insurance,
    Emi,
    First_Emi_Date,
    Scheme,
    Login_Bank,
    Disbursal_Date,
    Dsa_Channel_Name,
    Rejection_Date,
    Rejection_Remark,
    Rejection_Description,
    email,
  });

  try {
    await rejectedData.save();
    res.status(200).json({ message: "Data submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch Rejected data from RejectedData table with this API
export const PfetchRejectedData = async (req, res) => {
  try {
    let query = {};
    const { email } = req.params;
    const { Status, filter, bankFilter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Upload_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Upload_Date: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            Upload_Date: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            Upload_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
      if (bankFilter && bankFilter !== "all") {
        query.Bank_Name = bankFilter;
      }
    }

    if (!email) {
      const data = await PRejectedData.find({ ...query });
      return res.status(200).json(data);
    }

    let userData;

    if (Status) {
      userData = await PRejectedData.find({ email, Status, ...query });
    } else {
      userData = await PRejectedData.find({ email, ...query });
    }

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided email" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
