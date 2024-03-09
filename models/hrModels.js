import mongoose from "mongoose";

const HrInterviewedCandidateFormSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Candidate_Name: {
    type: String,
    default: null,
  },
  Father_Husband_Name: {
    type: String,
    default: null,
  },
  Mobile_No: {
    type: String,
    default: null,
  },
  Candidate_Email: {
    type: String,
    default: null,
  },
  Candidate_Location: {
    type: String,
    default: null,
  },
  experience: {
    type: String,
    default: null,
  },
  experience_year: {
    type: String,
    default: null,
  },
  experience_type: {
    type: String,
    default: null,
  },
  experience_other_type: {
    type: String,
    default: null,
  },
  hrEmailId: {
    type: String,
    default: null,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
  DOB: {
    type: Date,
    default: null,
  },
  DOJ: {
    type: Date,
    default: null,
  },
  Aadhar_No: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Local_Outstation: {
    type: String,
    default: null,
  },
  Pan_No: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Account_Number: {
    type: String,
    default: null,
  },
  IFSC_Code: {
    type: String,
    default: null,
  },
  Branch: {
    type: String,
    default: null,
  },
  Process: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  CTC: {
    type: String,
    default: null,
  },
  In_Hand: {
    type: String,
    default: null,
  },
  Permanent_Address: {
    type: String,
    default: null,
  },
  Current_Address: {
    type: String,
    default: null,
  },
  City: {
    type: String,
    default: null,
  },
  Emergency_Contact_No: {
    type: String,
    default: null,
  },
  Contact_No_Relation: {
    type: String,
    default: null,
  },
  Verification_Status: {
    type: String,
    default: null,
  },
  Father_Husband_Aadhar_No: {
    type: String,
    default: null,
  },
  Relation: {
    type: String,
    default: null,
  },
  Father_Husband_DOB: {
    type: Date,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mother_Aadhar_No: {
    type: String,
    default: null,
  },
  Mother_DOB: {
    type: Date,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Spouse_Aadhar_No: {
    type: String,
    default: null,
  },
  Spouse_DOB: {
    type: Date,
    default: null,
  },
  Rejection_Date: {
    type: Date,
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
  Blacklist_Date: {
    type: Date,
    default: null,
  },
  Blacklist_Description: {
    type: String,
    default: null,
  },
  Exit_Date: {
    type: Date,
    default: null,
  },
  Exit_Description: {
    type: String,
    default: null,
  },
});

const HrSalaryOfferedCandidateFormSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Candidate_Name: {
    type: String,
    default: null,
  },
  Father_Husband_Name: {
    type: String,
    default: null,
  },
  Mobile_No: {
    type: String,
    default: null,
  },
  Candidate_Email: {
    type: String,
    default: null,
  },
  Candidate_Location: {
    type: String,
    default: null,
  },
  experience: {
    type: String,
    default: null,
  },
  experience_year: {
    type: String,
    default: null,
  },
  experience_type: {
    type: String,
    default: null,
  },
  experience_other_type: {
    type: String,
    default: null,
  },
  hrEmailId: {
    type: String,
    default: null,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
  DOB: {
    type: Date,
    default: null,
  },
  DOJ: {
    type: Date,
    default: null,
  },
  Aadhar_No: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Local_Outstation: {
    type: String,
    default: null,
  },
  Pan_No: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Account_Number: {
    type: String,
    default: null,
  },
  IFSC_Code: {
    type: String,
    default: null,
  },
  Branch: {
    type: String,
    default: null,
  },
  Process: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  CTC: {
    type: String,
    default: null,
  },
  In_Hand: {
    type: String,
    default: null,
  },
  Permanent_Address: {
    type: String,
    default: null,
  },
  Current_Address: {
    type: String,
    default: null,
  },
  City: {
    type: String,
    default: null,
  },
  Emergency_Contact_No: {
    type: String,
    default: null,
  },
  Contact_No_Relation: {
    type: String,
    default: null,
  },
  Verification_Status: {
    type: String,
    default: null,
  },
  Father_Husband_Aadhar_No: {
    type: String,
    default: null,
  },
  Relation: {
    type: String,
    default: null,
  },
  Father_Husband_DOB: {
    type: Date,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mother_Aadhar_No: {
    type: String,
    default: null,
  },
  Mother_DOB: {
    type: Date,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Spouse_Aadhar_No: {
    type: String,
    default: null,
  },
  Spouse_DOB: {
    type: Date,
    default: null,
  },
  Rejection_Date: {
    type: Date,
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
  Blacklist_Date: {
    type: Date,
    default: null,
  },
  Blacklist_Description: {
    type: String,
    default: null,
  },
  Exit_Date: {
    type: Date,
    default: null,
  },
  Exit_Description: {
    type: String,
    default: null,
  },
});

const HrConfirmedCandidateFormSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Candidate_Name: {
    type: String,
    default: null,
  },
  Father_Husband_Name: {
    type: String,
    default: null,
  },
  Mobile_No: {
    type: String,
    default: null,
  },
  Candidate_Email: {
    type: String,
    default: null,
  },
  Candidate_Location: {
    type: String,
    default: null,
  },
  experience: {
    type: String,
    default: null,
  },
  experience_year: {
    type: String,
    default: null,
  },
  experience_type: {
    type: String,
    default: null,
  },
  experience_other_type: {
    type: String,
    default: null,
  },
  hrEmailId: {
    type: String,
    default: null,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
  DOB: {
    type: Date,
    default: null,
  },
  DOJ: {
    type: Date,
    default: null,
  },
  Aadhar_No: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Local_Outstation: {
    type: String,
    default: null,
  },
  Pan_No: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Account_Number: {
    type: String,
    default: null,
  },
  IFSC_Code: {
    type: String,
    default: null,
  },
  Branch: {
    type: String,
    default: null,
  },
  Process: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  CTC: {
    type: String,
    default: null,
  },
  In_Hand: {
    type: String,
    default: null,
  },
  Permanent_Address: {
    type: String,
    default: null,
  },
  Current_Address: {
    type: String,
    default: null,
  },
  City: {
    type: String,
    default: null,
  },
  Emergency_Contact_No: {
    type: String,
    default: null,
  },
  Contact_No_Relation: {
    type: String,
    default: null,
  },
  Verification_Status: {
    type: String,
    default: null,
  },
  Father_Husband_Aadhar_No: {
    type: String,
    default: null,
  },
  Relation: {
    type: String,
    default: null,
  },
  Father_Husband_DOB: {
    type: Date,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mother_Aadhar_No: {
    type: String,
    default: null,
  },
  Mother_DOB: {
    type: Date,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Spouse_Aadhar_No: {
    type: String,
    default: null,
  },
  Spouse_DOB: {
    type: Date,
    default: null,
  },
  Rejection_Date: {
    type: Date,
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
  Blacklist_Date: {
    type: Date,
    default: null,
  },
  Blacklist_Description: {
    type: String,
    default: null,
  },
  Exit_Date: {
    type: Date,
    default: null,
  },
  Exit_Description: {
    type: String,
    default: null,
  },
});

const HrRejectedCandidateFormSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Candidate_Name: {
    type: String,
    default: null,
  },
  Father_Husband_Name: {
    type: String,
    default: null,
  },
  Mobile_No: {
    type: String,
    default: null,
  },
  Candidate_Email: {
    type: String,
    default: null,
  },
  Candidate_Location: {
    type: String,
    default: null,
  },
  experience: {
    type: String,
    default: null,
  },
  experience_year: {
    type: String,
    default: null,
  },
  experience_type: {
    type: String,
    default: null,
  },
  experience_other_type: {
    type: String,
    default: null,
  },
  hrEmailId: {
    type: String,
    default: null,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
  DOB: {
    type: Date,
    default: null,
  },
  DOJ: {
    type: Date,
    default: null,
  },
  Aadhar_No: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Local_Outstation: {
    type: String,
    default: null,
  },
  Pan_No: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Account_Number: {
    type: String,
    default: null,
  },
  IFSC_Code: {
    type: String,
    default: null,
  },
  Branch: {
    type: String,
    default: null,
  },
  Process: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  CTC: {
    type: String,
    default: null,
  },
  In_Hand: {
    type: String,
    default: null,
  },
  Permanent_Address: {
    type: String,
    default: null,
  },
  Current_Address: {
    type: String,
    default: null,
  },
  City: {
    type: String,
    default: null,
  },
  Emergency_Contact_No: {
    type: String,
    default: null,
  },
  Contact_No_Relation: {
    type: String,
    default: null,
  },
  Verification_Status: {
    type: String,
    default: null,
  },
  Father_Husband_Aadhar_No: {
    type: String,
    default: null,
  },
  Relation: {
    type: String,
    default: null,
  },
  Father_Husband_DOB: {
    type: Date,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mother_Aadhar_No: {
    type: String,
    default: null,
  },
  Mother_DOB: {
    type: Date,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Spouse_Aadhar_No: {
    type: String,
    default: null,
  },
  Spouse_DOB: {
    type: Date,
    default: null,
  },
  Rejection_Date: {
    type: Date,
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
  Blacklist_Date: {
    type: Date,
    default: null,
  },
  Blacklist_Description: {
    type: String,
    default: null,
  },
  Exit_Date: {
    type: Date,
    default: null,
  },
  Exit_Description: {
    type: String,
    default: null,
  },
});

const HrBlacklistedCandidateFormSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Candidate_Name: {
    type: String,
    default: null,
  },
  Father_Husband_Name: {
    type: String,
    default: null,
  },
  Mobile_No: {
    type: String,
    default: null,
  },
  Candidate_Email: {
    type: String,
    default: null,
  },
  Candidate_Location: {
    type: String,
    default: null,
  },
  experience: {
    type: String,
    default: null,
  },
  experience_year: {
    type: String,
    default: null,
  },
  experience_type: {
    type: String,
    default: null,
  },
  experience_other_type: {
    type: String,
    default: null,
  },
  hrEmailId: {
    type: String,
    default: null,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
  DOB: {
    type: Date,
    default: null,
  },
  DOJ: {
    type: Date,
    default: null,
  },
  Aadhar_No: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Local_Outstation: {
    type: String,
    default: null,
  },
  Pan_No: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Account_Number: {
    type: String,
    default: null,
  },
  IFSC_Code: {
    type: String,
    default: null,
  },
  Branch: {
    type: String,
    default: null,
  },
  Process: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  CTC: {
    type: String,
    default: null,
  },
  In_Hand: {
    type: String,
    default: null,
  },
  Permanent_Address: {
    type: String,
    default: null,
  },
  Current_Address: {
    type: String,
    default: null,
  },
  City: {
    type: String,
    default: null,
  },
  Emergency_Contact_No: {
    type: String,
    default: null,
  },
  Contact_No_Relation: {
    type: String,
    default: null,
  },
  Verification_Status: {
    type: String,
    default: null,
  },
  Father_Husband_Aadhar_No: {
    type: String,
    default: null,
  },
  Relation: {
    type: String,
    default: null,
  },
  Father_Husband_DOB: {
    type: Date,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mother_Aadhar_No: {
    type: String,
    default: null,
  },
  Mother_DOB: {
    type: Date,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Spouse_Aadhar_No: {
    type: String,
    default: null,
  },
  Spouse_DOB: {
    type: Date,
    default: null,
  },
  Rejection_Date: {
    type: Date,
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
  Blacklist_Date: {
    type: Date,
    default: null,
  },
  Blacklist_Description: {
    type: String,
    default: null,
  },
  Exit_Date: {
    type: Date,
    default: null,
  },
  Exit_Description: {
    type: String,
    default: null,
  },
});

const HrExitedCandidateFormSchema = new mongoose.Schema({
  Status: {
    type: String,
    default: null,
  },
  Candidate_Name: {
    type: String,
    default: null,
  },
  Father_Husband_Name: {
    type: String,
    default: null,
  },
  Mobile_No: {
    type: String,
    default: null,
  },
  Candidate_Email: {
    type: String,
    default: null,
  },
  Candidate_Location: {
    type: String,
    default: null,
  },
  experience: {
    type: String,
    default: null,
  },
  experience_year: {
    type: String,
    default: null,
  },
  experience_type: {
    type: String,
    default: null,
  },
  experience_other_type: {
    type: String,
    default: null,
  },
  hrEmailId: {
    type: String,
    default: null,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
  DOB: {
    type: Date,
    default: null,
  },
  DOJ: {
    type: Date,
    default: null,
  },
  Aadhar_No: {
    type: String,
    default: null,
  },
  Qualification: {
    type: String,
    default: null,
  },
  Local_Outstation: {
    type: String,
    default: null,
  },
  Pan_No: {
    type: String,
    default: null,
  },
  Bank_Name: {
    type: String,
    default: null,
  },
  Account_Number: {
    type: String,
    default: null,
  },
  IFSC_Code: {
    type: String,
    default: null,
  },
  Branch: {
    type: String,
    default: null,
  },
  Process: {
    type: String,
    default: null,
  },
  Designation: {
    type: String,
    default: null,
  },
  CTC: {
    type: String,
    default: null,
  },
  In_Hand: {
    type: String,
    default: null,
  },
  Permanent_Address: {
    type: String,
    default: null,
  },
  Current_Address: {
    type: String,
    default: null,
  },
  City: {
    type: String,
    default: null,
  },
  Emergency_Contact_No: {
    type: String,
    default: null,
  },
  Contact_No_Relation: {
    type: String,
    default: null,
  },
  Verification_Status: {
    type: String,
    default: null,
  },
  Father_Husband_Aadhar_No: {
    type: String,
    default: null,
  },
  Relation: {
    type: String,
    default: null,
  },
  Father_Husband_DOB: {
    type: Date,
    default: null,
  },
  Mother_Name: {
    type: String,
    default: null,
  },
  Mother_Aadhar_No: {
    type: String,
    default: null,
  },
  Mother_DOB: {
    type: Date,
    default: null,
  },
  Spouse_Name: {
    type: String,
    default: null,
  },
  Spouse_Aadhar_No: {
    type: String,
    default: null,
  },
  Spouse_DOB: {
    type: Date,
    default: null,
  },
  Rejection_Date: {
    type: Date,
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
  Blacklist_Date: {
    type: Date,
    default: null,
  },
  Blacklist_Description: {
    type: String,
    default: null,
  },
  Exit_Date: {
    type: Date,
    default: null,
  },
  Exit_Description: {
    type: String,
    default: null,
  },
});

const HrInterviewedCandidateFormData = mongoose.model(
  "HrInterviewedCandidateFormData",
  HrInterviewedCandidateFormSchema
);
const HrSalaryOfferedCandidateFormData = mongoose.model(
  "HrSalaryOfferedCandidateFormData",
  HrSalaryOfferedCandidateFormSchema
);
const HrConfirmedCandidateFormData = mongoose.model(
  "HrConfirmedCandidateFormData",
  HrConfirmedCandidateFormSchema
);
const HrRejectedCandidateFormData = mongoose.model(
  "HrRejectedCandidateFormData",
  HrRejectedCandidateFormSchema
);

const HrBlacklistedCandidateFormData = mongoose.model(
  "HrBlacklistedCandidateFormData",
  HrBlacklistedCandidateFormSchema
);

const HrExitedCandidateFormData = mongoose.model(
  "HrExitedCandidateFormData",
  HrExitedCandidateFormSchema
);

export {
  HrInterviewedCandidateFormData,
  HrSalaryOfferedCandidateFormData,
  HrConfirmedCandidateFormData,
  HrRejectedCandidateFormData,
  HrBlacklistedCandidateFormData,
  HrExitedCandidateFormData,
};
