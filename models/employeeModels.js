import mongoose from "mongoose";
import bcrypt from "bcrypt";

const employeeSchema = new mongoose.Schema({
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

const employeeProfileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  personalemail: {
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
  dob: {
    type: Date,
    required: true,
  },
  pancardno: {
    type: String,
    required: true,
  },
  pancardphoto: {
    type: String,
    required: true,
  },
  aadharcardno: {
    type: String,
    required: true,
  },
  aadharcardphotoFront: {
    type: String,
    required: true,
  },
  aadharcardphotoBack: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  maritalstatus: {
    type: String,
    enum: ["Married", "Unmarried"],
    required: true,
  },
  spousename: {
    type: String,
    default: null,
  },
  qualification: {
    type: String,
    required: true,
  },
  propertystatus: {
    type: String,
    enum: ["Own", "Rented"],
    required: true,
  },
  currentaddressline: {
    type: String,
    required: true,
  },
  currentcity: {
    type: String,
    required: true,
  },
  currentstate: {
    type: String,
    required: true,
  },
  currentpin: {
    type: String,
    required: true,
  },
  permanentaddressline: {
    type: String,
    default: null,
  },
  permanentcity: {
    type: String,
    default: null,
  },
  permanentstate: {
    type: String,
    default: null,
  },
  permanentpin: {
    type: String,
    default: null,
  },
  designation: {
    type: String,
    required: true,
  },
  totalworkexperience: {
    type: String,
    required: true,
  },
});

// All data Schema
const formalDataSchema = new mongoose.Schema({
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

const pendingFormSchema = new mongoose.Schema({
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

const disbursedDataSchema = new mongoose.Schema({
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

const rejectedDataSchema = new mongoose.Schema({
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

// Hash the password before saving
employeeSchema.pre("save", function (next) {
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

const Employee = mongoose.model("Employee", employeeSchema);
const EmployeeProfileModel = mongoose.model(
  "EmployeeProfile",
  employeeProfileSchema
);
const FormalData = mongoose.model("FormalData", formalDataSchema);
const PendingFormData = mongoose.model("PendingFormData", pendingFormSchema);
const DisbursedData = mongoose.model("DisbursedData", disbursedDataSchema);
const RejectedData = mongoose.model("rejecteddata", rejectedDataSchema);

export {
  Employee,
  FormalData,
  PendingFormData,
  DisbursedData,
  RejectedData,
  EmployeeProfileModel,
};
