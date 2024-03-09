import mongoose from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    default: null,
  },
  signedUpDate: {
    type: Date,
    default: Date.now,
  },
});

const customerLoanDataSchema = new mongoose.Schema({
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
    type: Date,
    default: Date.now,
  },
});

const customerInsuranceDataSchema = new mongoose.Schema({
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
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

const cibilSchema = new mongoose.Schema({
  Customer_Name: { type: String, default: null, required: true },
  Father_Name: { type: String, default: null, required: true },
  Mother_Name: { type: String, default: null, required: true },
  Mobile_No: { type: String, default: null, required: true },
  email: { type: String, default: null, required: true },
  Pan_No: { type: String, default: null, required: true },
  Customer_Location: { type: String, default: null, required: true },
  Company_Name: { type: String, default: null, required: true },
  dob: { type: String, default: null, required: true },
  Monthly_Salary: { type: String, default: null, required: true },
  Cibil_Score: { type: String, default: null, required: true },
  Resi_Status: { type: String, default: null, required: true },
  Upload_Cibil: { type: String, default: null, required: true },
  Upload_Dontated_Receipt: { type: String, default: null, required: true },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

const customerCardSchema = new mongoose.Schema({
  bankName: { type: String, default: null, required: true },
  customerName: { type: String, default: null, required: true },
  fatherName: { type: String, default: null, required: true },
  motherName: { type: String, default: null, required: true },
  mobileNo: { type: String, default: null, required: true },
  mailId: { type: String, default: null, required: true },
  panCardNo: { type: String, default: null, required: true },
  ImploymentType: { type: String, default: null, required: true },
  PerMonthSalary: { type: String, default: null, required: true },
  aadharCardNo: { type: String, default: null, required: true },
  customerLocation: { type: String, default: null, required: true },
  companyName: { type: String, default: null, required: true },
  dob: { type: String, default: null, required: true },
  gender: { type: String, default: null },
  religion: { type: String, default: null },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

// Career form schema
const CareerFormDataSchema = new mongoose.Schema({
  JobApplier_Name: {
    type: String,
    default: null,
  },
  Father_Name: {
    type: String,
    default: null,
  },
  Mobile_No: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  JobApplier_Location: {
    type: String,
    default: null,
  },
  experience: {
    type: String,
    default: null,
  },
  experiene_year: {
    type: String,
    default: null,
  },
  experiene_type: {
    type: String,
    default: null,
  },
  Upload_CV: Buffer,
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    default: null,
  },
  mobileNo: {
    type: String,
    default: null,
  },
  state: {
    type: String,
    default: null,
  },
  employmentType: {
    type: String,
    default: null,
  },
  monthlySalary: {
    type: String,
    default: null,
  },
  haveGST: {
    type: String,
    default: null,
  },
  selectedCheckboxes: {
    type: [String],
    default: null,
  },
  Inquiry_Date: {
    type: Date,
    default: Date.now,
  },
});

// Hash the password before saving
customerSchema.pre("save", function (next) {
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

const Customer = mongoose.model("Customer", customerSchema);
const CibilIssueData = mongoose.model("CibilIssueData", cibilSchema);
const CareerFormData = mongoose.model("CareerFormData", CareerFormDataSchema);
const Contact = mongoose.model("Contact", ContactSchema);
const CustomerCardData = mongoose.model("CustomerCardData", customerCardSchema);

const CustomerLoanData = mongoose.model(
  "CustomerLoanData",
  customerLoanDataSchema
);
const CustomerInsuranceData = mongoose.model(
  "CustomerInsuranceData",
  customerInsuranceDataSchema
);

export {
  Customer,
  CustomerLoanData,
  CibilIssueData,
  CustomerCardData,
  CareerFormData,
  CustomerInsuranceData,
  Contact,
};
