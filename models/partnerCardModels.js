// models/Employee.js
import mongoose from "mongoose";

// All data Schema
const PCardFormAlDataSchema = new mongoose.Schema({
  Status: {
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
  Annual_Ctc: {
    type: String,
    default: null,
  },
  Net_Salary: {
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
  Card_Application_No: {
    type: String,
    default: null,
  },
  Card_Issue_Date: {
    type: String,
    default: null,
  },
  Rejection_Category: {
    type: String,
    default: null,
  },
  Rejection_Remark: {
    type: String,
    default: null,
  },
  Rejection_Date: {
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
const PCardPendingFormSchema = new mongoose.Schema({
  Status: {
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
  Annual_Ctc: {
    type: String,
    default: null,
  },
  Net_Salary: {
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
  Card_Application_No: {
    type: String,
    default: null,
  },
  Card_Issue_Date: {
    type: String,
    default: null,
  },
  Rejection_Category: {
    type: String,
    default: null,
  },
  Rejection_Remark: {
    type: String,
    default: null,
  },
  Rejection_Date: {
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

const PCardDisbursedDataSchema = new mongoose.Schema({
  Status: {
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
  Annual_Ctc: {
    type: String,
    default: null,
  },
  Net_Salary: {
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
  Card_Application_No: {
    type: String,
    default: null,
  },
  Card_Issue_Date: {
    type: String,
    default: null,
  },
  Rejection_Category: {
    type: String,
    default: null,
  },
  Rejection_Remark: {
    type: String,
    default: null,
  },
  Rejection_Date: {
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

const PCardRejectedDataSchema = new mongoose.Schema({
  Status: {
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
  Annual_Ctc: {
    type: String,
    default: null,
  },
  Net_Salary: {
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
  Card_Application_No: {
    type: String,
    default: null,
  },
  Card_Issue_Date: {
    type: String,
    default: null,
  },
  Rejection_Category: {
    type: String,
    default: null,
  },
  Rejection_Remark: {
    type: String,
    default: null,
  },
  Rejection_Date: {
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

const PCardFormAlData = mongoose.model(
  "PCardFormAlData",
  PCardFormAlDataSchema
);
const PCardPendingFormData = mongoose.model(
  "PCardPendingFormData",
  PCardPendingFormSchema
);
const PCardDisbursedData = mongoose.model(
  "PCardDisbursedData",
  PCardDisbursedDataSchema
);
// Create a model using the schema
const PCardRejectedData = mongoose.model(
  "PCardRejecteddata",
  PCardRejectedDataSchema
);

export {
  PCardFormAlData,
  PCardPendingFormData,
  PCardDisbursedData,
  PCardRejectedData,
};
