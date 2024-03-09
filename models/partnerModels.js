import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define the Mongoose schema
const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  mothername: {
    type: String,
    required: true,
  },
  spousename: String,
  gender: {
    type: String,
    required: true,
  },
  religion: String,
  citizenship: {
    type: String,
    required: true,
  },
  mobileno: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Simple phone number validation (10 digits)
        return /^\d{10}$/.test(value);
      },
      message: "Invalid phone number format",
    },
  },
  AadharCardNo: {
    type: String,
    required: true,
  },
  PanCardNo: {
    type: String,
    required: true,
  },
  personalemailid: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid personal email format",
    },
  },
  officialemailid: {
    type: String,
    validate: {
      validator: function (value) {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid official email format",
    },
  },
  currentAddress: {
    type: String,
    required: true,
  },
  currentCity: {
    type: String,
    required: true,
  },
  currentState: {
    type: String,
    required: true,
  },
  currentPincode: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  permanentCity: {
    type: String,
    required: true,
  },
  permanentState: {
    type: String,
    required: true,
  },
  permanentPincode: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  companyGSTNo: {
    type: String,
    required: true,
  },
  websiteLink: String,
  totalWorkExperience: String,
  companyCity: {
    type: String,
    required: true,
  },
  companyState: {
    type: String,
    required: true,
  },
  companyPincode: {
    type: String,
    required: true,
  },

  reference1name: {
    type: String,
    required: true,
  },
  reference1mobile: {
    type: String,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Invalid reference 1 phone number format",
    },
  },
  reference1pincode: {
    type: String,
    required: true,
  },
  reference1address: {
    type: String,
    required: true,
  },
  reference1city: {
    type: String,
    required: true,
  },
  reference1state: {
    type: String,
    required: true,
  },

  reference2name: {
    type: String,
    required: true,
  },
  reference2mobile: {
    type: String,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Invalid reference 2 phone number format",
    },
  },
  reference2pincode: {
    type: String,
    required: true,
  },
  reference2address: {
    type: String,
    required: true,
  },
  reference2city: {
    type: String,
    required: true,
  },
  reference2state: {
    type: String,
    required: true,
  },

  branchName: {
    type: String,
    required: true,
  },
  termsAndCondition: {
    type: Boolean,
    required: true,
  },
  status: { type: String, default: "pending" },
});

const pEmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  TL_Name: String,
  Branch_Name: String,
  userType: String,
  is_verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: String,
});

// All data Schema
const pFormalDataSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Product_Loan: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Customer_Name: {
    type: String,
    default: null,
  },
  Father_Name: {
    type: String,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mobile: {
    type: String,
    default: null,
  },
  Personal_Email: {
    type: String,
    default: null,
  },
  Pan_Card: {
    type: String,
    default: null,
  },
  Customer_Location: {
    type: String,
    default: null,
  },
  Company_Name: {
    type: String,
    default: null,
  },
  Dob: {
    type: String,
    default: null,
  },
  Login_Date: {
    type: String,
    default: null,
  },
  Gender: {
    type: String,
    default: null,
  },
  Religion: {
    type: String,
    default: null,
  },
  Income_Source: {
    type: String,
    default: null,
  },
  Marital_Status: {
    type: String,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Property_Status: {
    type: String,
    default: null,
  },
  Aadhar_Card_No: {
    type: String,
    default: null,
  },
  Current_Address_Line1: {
    type: String,
    default: null,
  },
  Current_Address_Line2: {
    type: String,
    default: null,
  },
  Current_City: {
    type: String,
    default: null,
  },
  Current_Landmark: {
    type: String,
    default: null,
  },
  Current_State: {
    type: String,
    default: null,
  },
  Current_Pin: {
    type: String,
    default: null,
  },
  Permanent_Address_Line1: {
    type: String,
    default: null,
  },
  Permanent_Address_Line2: {
    type: String,
    default: null,
  },
  Permanent_City: {
    type: String,
    default: null,
  },
  Permanent_Landmark: {
    type: String,
    default: null,
  },
  Permanent_State: {
    type: String,
    default: null,
  },
  Permanent_Pin: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  Current_Company_Work_Experience: {
    type: String,
    default: null,
  },
  Total_Work_Experience: {
    type: String,
    default: null,
  },
  Company_Type: {
    type: String,
    default: null,
  },
  Official_Mail: {
    type: String,
    default: null,
  },
  Company_Address: {
    type: String,
    default: null,
  },
  Company_City: {
    type: String,
    default: null,
  },
  Company_State: {
    type: String,
    default: null,
  },
  Company_Pin: {
    type: String,
    default: null,
  },
  Salary_Account_BankName: {
    type: String,
    default: null,
  },
  Annual_Ctc: {
    type: String,
    default: null,
  },
  Net_Salary: {
    type: String,
    default: null,
  },
  Obligations: {
    type: String,
    default: null,
  },
  Scheme_Offered: {
    type: String,
    default: null,
  },
  Loan_Amount_Applied: {
    type: String,
    default: null,
  },
  Tenure_Of_Loan: {
    type: String,
    default: null,
  },
  Credit_Card_Obligation: {
    type: String,
    default: null,
  },
  Reference1_FullName_Relative: {
    type: String,
    default: null,
  },
  Reference1_MobileNo: {
    type: String,
    default: null,
  },
  Reference1_Address1: {
    type: String,
    default: null,
  },
  Reference1_City: {
    type: String,
    default: null,
  },
  Reference1_State: {
    type: String,
    default: null,
  },
  Reference1_Pin: {
    type: String,
    default: null,
  },
  Reference2_FullName_Friend: {
    type: String,
    default: null,
  },
  Reference2_MobileNo: {
    type: String,
    default: null,
  },
  Reference2_Address1: {
    type: String,
    default: null,
  },
  Reference2_City: {
    type: String,
    default: null,
  },
  Reference2_State: {
    type: String,
    default: null,
  },
  Reference2_Pin: {
    type: String,
    default: null,
  },
  Caller_Name: {
    type: String,
    default: null,
  },
  TL_Name: {
    type: String,
    default: null,
  },
  Manager_Name: {
    type: String,
    default: null,
  },
  Disbursal_BankName: {
    type: String,
    default: null,
  },
  Loan_Application_No: {
    type: String,
    default: null,
  },
  Approved_Amount: {
    type: String,
    default: null,
  },
  Disbursal_Loan_Amount: {
    type: String,
    default: null,
  },
  Inhand_Disb_Account: {
    type: String,
    default: null,
  },
  Bt_Disb_Amount: {
    type: String,
    default: null,
  },
  Top_Up: {
    type: String,
    default: null,
  },
  Cibil: {
    type: String,
    default: null,
  },
  Tenure_Disbursal: {
    type: String,
    default: null,
  },
  Roi: {
    type: String,
    default: null,
  },
  Pf: {
    type: String,
    default: null,
  },
  Insurance: {
    type: String,
    default: null,
  },
  Emi: {
    type: String,
    default: null,
  },
  First_Emi_Date: {
    type: String,
    default: null,
  },
  Scheme: {
    type: String,
    default: null,
  },
  Login_Bank: {
    type: String,
    default: null,
  },
  Disbursal_Date: {
    type: String,
    default: null,
  },
  Dsa_Channel_Name: {
    type: String,
    default: null,
  },
  Rejection_Date: {
    type: String,
    default: null,
  },
  Rejection_Remark: {
    type: String,
    default: null,
  },
  Rejection_Description: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  Upload_Date: {
    type: Date,
    default: Date.now,
  },
});

const pPendingFormSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Product_Loan: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Customer_Name: {
    type: String,
    default: null,
  },
  Father_Name: {
    type: String,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mobile: {
    type: String,
    default: null,
  },
  Personal_Email: {
    type: String,
    default: null,
  },
  Pan_Card: {
    type: String,
    default: null,
  },
  Customer_Location: {
    type: String,
    default: null,
  },
  Company_Name: {
    type: String,
    default: null,
  },
  Dob: {
    type: String,
    default: null,
  },
  Login_Date: {
    type: String,
    default: null,
  },
  Gender: {
    type: String,
    default: null,
  },
  Religion: {
    type: String,
    default: null,
  },
  Income_Source: {
    type: String,
    default: null,
  },
  Marital_Status: {
    type: String,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Property_Status: {
    type: String,
    default: null,
  },
  Aadhar_Card_No: {
    type: String,
    default: null,
  },
  Current_Address_Line1: {
    type: String,
    default: null,
  },
  Current_Address_Line2: {
    type: String,
    default: null,
  },
  Current_City: {
    type: String,
    default: null,
  },
  Current_Landmark: {
    type: String,
    default: null,
  },
  Current_State: {
    type: String,
    default: null,
  },
  Current_Pin: {
    type: String,
    default: null,
  },
  Permanent_Address_Line1: {
    type: String,
    default: null,
  },
  Permanent_Address_Line2: {
    type: String,
    default: null,
  },
  Permanent_City: {
    type: String,
    default: null,
  },
  Permanent_Landmark: {
    type: String,
    default: null,
  },
  Permanent_State: {
    type: String,
    default: null,
  },
  Permanent_Pin: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  Current_Company_Work_Experience: {
    type: String,
    default: null,
  },
  Total_Work_Experience: {
    type: String,
    default: null,
  },
  Company_Type: {
    type: String,
    default: null,
  },
  Official_Mail: {
    type: String,
    default: null,
  },
  Company_Address: {
    type: String,
    default: null,
  },
  Company_City: {
    type: String,
    default: null,
  },
  Company_State: {
    type: String,
    default: null,
  },
  Company_Pin: {
    type: String,
    default: null,
  },
  Salary_Account_BankName: {
    type: String,
    default: null,
  },
  Annual_Ctc: {
    type: String,
    default: null,
  },
  Net_Salary: {
    type: String,
    default: null,
  },
  Obligations: {
    type: String,
    default: null,
  },
  Scheme_Offered: {
    type: String,
    default: null,
  },
  Loan_Amount_Applied: {
    type: String,
    default: null,
  },
  Tenure_Of_Loan: {
    type: String,
    default: null,
  },
  Credit_Card_Obligation: {
    type: String,
    default: null,
  },
  Reference1_FullName_Relative: {
    type: String,
    default: null,
  },
  Reference1_MobileNo: {
    type: String,
    default: null,
  },
  Reference1_Address1: {
    type: String,
    default: null,
  },
  Reference1_City: {
    type: String,
    default: null,
  },
  Reference1_State: {
    type: String,
    default: null,
  },
  Reference1_Pin: {
    type: String,
    default: null,
  },
  Reference2_FullName_Friend: {
    type: String,
    default: null,
  },
  Reference2_MobileNo: {
    type: String,
    default: null,
  },
  Reference2_Address1: {
    type: String,
    default: null,
  },
  Reference2_City: {
    type: String,
    default: null,
  },
  Reference2_State: {
    type: String,
    default: null,
  },
  Reference2_Pin: {
    type: String,
    default: null,
  },
  Caller_Name: {
    type: String,
    default: null,
  },
  TL_Name: {
    type: String,
    default: null,
  },
  Manager_Name: {
    type: String,
    default: null,
  },
  Disbursal_BankName: {
    type: String,
    default: null,
  },
  Loan_Application_No: {
    type: String,
    default: null,
  },
  Approved_Amount: {
    type: String,
    default: null,
  },
  Disbursal_Loan_Amount: {
    type: String,
    default: null,
  },
  Inhand_Disb_Account: {
    type: String,
    default: null,
  },
  Bt_Disb_Amount: {
    type: String,
    default: null,
  },
  Top_Up: {
    type: String,
    default: null,
  },
  Cibil: {
    type: String,
    default: null,
  },
  Tenure_Disbursal: {
    type: String,
    default: null,
  },
  Roi: {
    type: String,
    default: null,
  },
  Pf: {
    type: String,
    default: null,
  },
  Insurance: {
    type: String,
    default: null,
  },
  Emi: {
    type: String,
    default: null,
  },
  First_Emi_Date: {
    type: String,
    default: null,
  },
  Scheme: {
    type: String,
    default: null,
  },
  Login_Bank: {
    type: String,
    default: null,
  },
  Disbursal_Date: {
    type: String,
    default: null,
  },
  Dsa_Channel_Name: {
    type: String,
    default: null,
  },
  Rejection_Date: {
    type: String,
    default: null,
  },
  Rejection_Remark: {
    type: String,
    default: null,
  },
  Rejection_Description: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  Upload_Date: {
    type: Date,
    default: Date.now,
  },
});

const pDisbursedDataSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Product_Loan: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Customer_Name: {
    type: String,
    default: null,
  },
  Father_Name: {
    type: String,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mobile: {
    type: String,
    default: null,
  },
  Personal_Email: {
    type: String,
    default: null,
  },
  Pan_Card: {
    type: String,
    default: null,
  },
  Customer_Location: {
    type: String,
    default: null,
  },
  Company_Name: {
    type: String,
    default: null,
  },
  Dob: {
    type: String,
    default: null,
  },
  Login_Date: {
    type: String,
    default: null,
  },
  Gender: {
    type: String,
    default: null,
  },
  Religion: {
    type: String,
    default: null,
  },
  Income_Source: {
    type: String,
    default: null,
  },
  Marital_Status: {
    type: String,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Property_Status: {
    type: String,
    default: null,
  },
  Aadhar_Card_No: {
    type: String,
    default: null,
  },
  Current_Address_Line1: {
    type: String,
    default: null,
  },
  Current_Address_Line2: {
    type: String,
    default: null,
  },
  Current_City: {
    type: String,
    default: null,
  },
  Current_Landmark: {
    type: String,
    default: null,
  },
  Current_State: {
    type: String,
    default: null,
  },
  Current_Pin: {
    type: String,
    default: null,
  },
  Permanent_Address_Line1: {
    type: String,
    default: null,
  },
  Permanent_Address_Line2: {
    type: String,
    default: null,
  },
  Permanent_City: {
    type: String,
    default: null,
  },
  Permanent_Landmark: {
    type: String,
    default: null,
  },
  Permanent_State: {
    type: String,
    default: null,
  },
  Permanent_Pin: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  Current_Company_Work_Experience: {
    type: String,
    default: null,
  },
  Total_Work_Experience: {
    type: String,
    default: null,
  },
  Company_Type: {
    type: String,
    default: null,
  },
  Official_Mail: {
    type: String,
    default: null,
  },
  Company_Address: {
    type: String,
    default: null,
  },
  Company_City: {
    type: String,
    default: null,
  },
  Company_State: {
    type: String,
    default: null,
  },
  Company_Pin: {
    type: String,
    default: null,
  },
  Salary_Account_BankName: {
    type: String,
    default: null,
  },
  Annual_Ctc: {
    type: String,
    default: null,
  },
  Net_Salary: {
    type: String,
    default: null,
  },
  Obligations: {
    type: String,
    default: null,
  },
  Scheme_Offered: {
    type: String,
    default: null,
  },
  Loan_Amount_Applied: {
    type: String,
    default: null,
  },
  Tenure_Of_Loan: {
    type: String,
    default: null,
  },
  Credit_Card_Obligation: {
    type: String,
    default: null,
  },
  Reference1_FullName_Relative: {
    type: String,
    default: null,
  },
  Reference1_MobileNo: {
    type: String,
    default: null,
  },
  Reference1_Address1: {
    type: String,
    default: null,
  },
  Reference1_City: {
    type: String,
    default: null,
  },
  Reference1_State: {
    type: String,
    default: null,
  },
  Reference1_Pin: {
    type: String,
    default: null,
  },
  Reference2_FullName_Friend: {
    type: String,
    default: null,
  },
  Reference2_MobileNo: {
    type: String,
    default: null,
  },
  Reference2_Address1: {
    type: String,
    default: null,
  },
  Reference2_City: {
    type: String,
    default: null,
  },
  Reference2_State: {
    type: String,
    default: null,
  },
  Reference2_Pin: {
    type: String,
    default: null,
  },
  Caller_Name: {
    type: String,
    default: null,
  },
  TL_Name: {
    type: String,
    default: null,
  },
  Manager_Name: {
    type: String,
    default: null,
  },
  Disbursal_BankName: {
    type: String,
    default: null,
  },
  Loan_Application_No: {
    type: String,
    default: null,
  },
  Approved_Amount: {
    type: String,
    default: null,
  },
  Disbursal_Loan_Amount: {
    type: String,
    default: null,
  },
  Inhand_Disb_Account: {
    type: String,
    default: null,
  },
  Bt_Disb_Amount: {
    type: String,
    default: null,
  },
  Top_Up: {
    type: String,
    default: null,
  },
  Cibil: {
    type: String,
    default: null,
  },
  Tenure_Disbursal: {
    type: String,
    default: null,
  },
  Roi: {
    type: String,
    default: null,
  },
  Pf: {
    type: String,
    default: null,
  },
  Insurance: {
    type: String,
    default: null,
  },
  Emi: {
    type: String,
    default: null,
  },
  First_Emi_Date: {
    type: String,
    default: null,
  },
  Scheme: {
    type: String,
    default: null,
  },
  Login_Bank: {
    type: String,
    default: null,
  },
  Disbursal_Date: {
    type: String,
    default: null,
  },
  Dsa_Channel_Name: {
    type: String,
    default: null,
  },
  Rejection_Date: {
    type: String,
    default: null,
  },
  Rejection_Remark: {
    type: String,
    default: null,
  },
  Rejection_Description: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  Upload_Date: {
    type: Date,
    default: Date.now,
  },
});

const pRejectedDataSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Product_Loan: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Customer_Name: {
    type: String,
    default: null,
  },
  Father_Name: {
    type: String,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mobile: {
    type: String,
    default: null,
  },
  Personal_Email: {
    type: String,
    default: null,
  },
  Pan_Card: {
    type: String,
    default: null,
  },
  Customer_Location: {
    type: String,
    default: null,
  },
  Company_Name: {
    type: String,
    default: null,
  },
  Dob: {
    type: String,
    default: null,
  },
  Login_Date: {
    type: String,
    default: null,
  },
  Gender: {
    type: String,
    default: null,
  },
  Religion: {
    type: String,
    default: null,
  },
  Income_Source: {
    type: String,
    default: null,
  },
  Marital_Status: {
    type: String,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Property_Status: {
    type: String,
    default: null,
  },
  Aadhar_Card_No: {
    type: String,
    default: null,
  },
  Current_Address_Line1: {
    type: String,
    default: null,
  },
  Current_Address_Line2: {
    type: String,
    default: null,
  },
  Current_City: {
    type: String,
    default: null,
  },
  Current_Landmark: {
    type: String,
    default: null,
  },
  Current_State: {
    type: String,
    default: null,
  },
  Current_Pin: {
    type: String,
    default: null,
  },
  Permanent_Address_Line1: {
    type: String,
    default: null,
  },
  Permanent_Address_Line2: {
    type: String,
    default: null,
  },
  Permanent_City: {
    type: String,
    default: null,
  },
  Permanent_Landmark: {
    type: String,
    default: null,
  },
  Permanent_State: {
    type: String,
    default: null,
  },
  Permanent_Pin: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  Current_Company_Work_Experience: {
    type: String,
    default: null,
  },
  Total_Work_Experience: {
    type: String,
    default: null,
  },
  Company_Type: {
    type: String,
    default: null,
  },
  Official_Mail: {
    type: String,
    default: null,
  },
  Company_Address: {
    type: String,
    default: null,
  },
  Company_City: {
    type: String,
    default: null,
  },
  Company_State: {
    type: String,
    default: null,
  },
  Company_Pin: {
    type: String,
    default: null,
  },
  Salary_Account_BankName: {
    type: String,
    default: null,
  },
  Annual_Ctc: {
    type: String,
    default: null,
  },
  Net_Salary: {
    type: String,
    default: null,
  },
  Obligations: {
    type: String,
    default: null,
  },
  Scheme_Offered: {
    type: String,
    default: null,
  },
  Loan_Amount_Applied: {
    type: String,
    default: null,
  },
  Tenure_Of_Loan: {
    type: String,
    default: null,
  },
  Credit_Card_Obligation: {
    type: String,
    default: null,
  },
  Reference1_FullName_Relative: {
    type: String,
    default: null,
  },
  Reference1_MobileNo: {
    type: String,
    default: null,
  },
  Reference1_Address1: {
    type: String,
    default: null,
  },
  Reference1_City: {
    type: String,
    default: null,
  },
  Reference1_State: {
    type: String,
    default: null,
  },
  Reference1_Pin: {
    type: String,
    default: null,
  },
  Reference2_FullName_Friend: {
    type: String,
    default: null,
  },
  Reference2_MobileNo: {
    type: String,
    default: null,
  },
  Reference2_Address1: {
    type: String,
    default: null,
  },
  Reference2_City: {
    type: String,
    default: null,
  },
  Reference2_State: {
    type: String,
    default: null,
  },
  Reference2_Pin: {
    type: String,
    default: null,
  },
  Caller_Name: {
    type: String,
    default: null,
  },
  TL_Name: {
    type: String,
    default: null,
  },
  Manager_Name: {
    type: String,
    default: null,
  },
  Disbursal_BankName: {
    type: String,
    default: null,
  },
  Loan_Application_No: {
    type: String,
    default: null,
  },
  Approved_Amount: {
    type: String,
    default: null,
  },
  Disbursal_Loan_Amount: {
    type: String,
    default: null,
  },
  Inhand_Disb_Account: {
    type: String,
    default: null,
  },
  Bt_Disb_Amount: {
    type: String,
    default: null,
  },
  Top_Up: {
    type: String,
    default: null,
  },
  Cibil: {
    type: String,
    default: null,
  },
  Tenure_Disbursal: {
    type: String,
    default: null,
  },
  Roi: {
    type: String,
    default: null,
  },
  Pf: {
    type: String,
    default: null,
  },
  Insurance: {
    type: String,
    default: null,
  },
  Emi: {
    type: String,
    default: null,
  },
  First_Emi_Date: {
    type: String,
    default: null,
  },
  Scheme: {
    type: String,
    default: null,
  },
  Login_Bank: {
    type: String,
    default: null,
  },
  Disbursal_Date: {
    type: String,
    default: null,
  },
  Dsa_Channel_Name: {
    type: String,
    default: null,
  },
  Rejection_Date: {
    type: String,
    default: null,
  },
  Rejection_Remark: {
    type: String,
    default: null,
  },
  Rejection_Description: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  Upload_Date: {
    type: Date,
    default: Date.now,
  },
});

const sentLoanDataToPartnerSchema = new mongoose.Schema({
  partnerName: {
    type: String,
    default: null,
  },
  partnerEmail: {
    type: String,
    default: null,
  },
  loanType: {
    type: String,
    default: null,
  },
  bankName: {
    type: String,
    default: null,
  },
  customerName: {
    type: String,
    default: null,
  },
  fatherName: {
    type: String,
    default: null,
  },
  motherName: {
    type: String,
    default: null,
  },
  mobileNo: {
    type: String,
    default: null,
  },
  mailId: {
    type: String,
    default: null,
  },
  panCardNo: {
    type: String,
    default: null,
  },
  AadharCardNo: {
    type: String,
    default: null,
  },
  ImploymentType: {
    type: String,
    default: null,
  },
  PerMonthSalary: {
    type: String,
    default: null,
  },
  customerLocation: {
    type: String,
    default: null,
  },
  companyName: {
    type: String,
    default: null,
  },
  dob: {
    type: String,
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  religion: {
    type: String,
    default: null,
  },
  appliedAmount: {
    type: String,
    default: null,
  },
  appliedDate: {
    type: String,
    default: null,
  },
  sentDate: {
    type: Date,
    default: Date.now,
  },
});

// Hash the password before saving
pEmployeeSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

const partnerModel = mongoose.model("Partner", partnerSchema);
const PEmployee = mongoose.model("pEmployee", pEmployeeSchema);
const PFormalData = mongoose.model("pFormalData", pFormalDataSchema);
const PPendingFormData = mongoose.model("PpendingFormData", pPendingFormSchema);
const PDisbursedData = mongoose.model("PdisbursedData", pDisbursedDataSchema);
const PRejectedData = mongoose.model("Prejecteddata", pRejectedDataSchema);
const SentLoanDataToPartner = mongoose.model(
  "SentLoanDataToPartner",
  sentLoanDataToPartnerSchema
);

export {
  partnerModel,
  PEmployee,
  PDisbursedData,
  PPendingFormData,
  PRejectedData,
  PFormalData,
  SentLoanDataToPartner,
};
