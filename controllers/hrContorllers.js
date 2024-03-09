import {
  HrBlacklistedCandidateFormData,
  HrConfirmedCandidateFormData,
  HrExitedCandidateFormData,
  HrInterviewedCandidateFormData,
  HrRejectedCandidateFormData,
  HrSalaryOfferedCandidateFormData,
} from "../models/hrModels.js";
import moment from "moment";

export const hrFormAllData = async (req, res) => {
  const data = req.body;

  try {
    const hrEmailId = req.body.hrEmailId;
    const hrInterviewedCandidateFormData = new HrInterviewedCandidateFormData({
      ...data,
      hrEmailId: hrEmailId,
    });
    await hrInterviewedCandidateFormData.save();

    const hrSalaryOfferedCandidateFormData =
      new HrSalaryOfferedCandidateFormData({
        ...data,
        hrEmailId: hrEmailId,
      });
    await hrSalaryOfferedCandidateFormData.save();

    res.status(200).json({ message: "Form data submitted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to submit the form", details: err.message });
  }
};

export const fetchInterviewedCandidate = async (req, res) => {
  try {
    let query = {};
    const { hrEmailId } = req.params;
    const { filter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            appliedDate: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            appliedDate: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            appliedDate: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            appliedDate: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
    }

    if (!hrEmailId) {
      const data = await HrInterviewedCandidateFormData.find({ ...query });
      return res.status(200).json(data);
    }

    const userData = await HrInterviewedCandidateFormData.find({
      hrEmailId,
      ...query,
    });

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided hrEmailId" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const fetchSalaryOfferedCandidate = async (req, res) => {
  try {
    let query = {};
    const { hrEmailId } = req.params;
    const { Status, filter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            appliedDate: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            appliedDate: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            appliedDate: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            appliedDate: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
    }

    if (!hrEmailId) {
      const data = await HrSalaryOfferedCandidateFormData.find({ ...query });
      return res.status(200).json(data);
    }

    let userData;

    if (Status) {
      userData = await HrSalaryOfferedCandidateFormData.find({
        hrEmailId,
        Status,
        ...query,
      });
    } else {
      userData = await HrSalaryOfferedCandidateFormData.find({
        hrEmailId,
        ...query,
      });
    }

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided hrEmailId" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Salary offered Data after submit API
export const deleteSalaryOfferedData = async (req, res) => {
  const id = req.params.id;
  try {
    await HrSalaryOfferedCandidateFormData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit data for candidate from HrConfirmedCandidateFormData with this API
export const sendConfirmedCandidateData = async (req, res) => {
  const {
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    DOB,
    DOJ,
    Aadhar_No,
    Qualification,
    Local_Outstation,
    Pan_No,
    Bank_Name,
    Account_Number,
    IFSC_Code,
    Branch,
    Process,
    Designation,
    CTC,
    In_Hand,
    Permanent_Address,
    Current_Address,
    City,
    Emergency_Contact_No,
    Contact_No_Relation,
    Verification_Status,
    Father_Husband_Aadhar_No,
    Relation,
    Father_Husband_DOB,
    Mother_Name,
    Mother_Aadhar_No,
    Mother_DOB,
    Spouse_Name,
    Spouse_Aadhar_No,
    Spouse_DOB,
  } = req.body;

  const hrConfirmedCandidateFormData = new HrConfirmedCandidateFormData({
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    DOB,
    DOJ,
    Aadhar_No,
    Qualification,
    Local_Outstation,
    Pan_No,
    Bank_Name,
    Account_Number,
    IFSC_Code,
    Branch,
    Process,
    Designation,
    CTC,
    In_Hand,
    Permanent_Address,
    Current_Address,
    City,
    Emergency_Contact_No,
    Contact_No_Relation,
    Verification_Status,
    Father_Husband_Aadhar_No,
    Relation,
    Father_Husband_DOB,
    Mother_Name,
    Mother_Aadhar_No,
    Mother_DOB,
    Spouse_Name,
    Spouse_Aadhar_No,
    Spouse_DOB,
  });

  try {
    await hrConfirmedCandidateFormData.save();
    res.status(200).json({ message: "Data submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch data for Candidate from HrConfirmedCandidateFormData with this API
export const fetchConfirmedCandidateData = async (req, res) => {
  try {
    let query = {};
    const { hrEmailId } = req.params;
    const { Status, filter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            appliedDate: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            appliedDate: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            appliedDate: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            appliedDate: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
    }

    if (!hrEmailId) {
      const data = await HrConfirmedCandidateFormData.find({ ...query });
      return res.status(200).json(data);
    }

    let userData;

    if (Status) {
      userData = await HrConfirmedCandidateFormData.find({
        hrEmailId,
        Status,
        ...query,
      });
    } else {
      userData = await HrConfirmedCandidateFormData.find({
        hrEmailId,
        ...query,
      });
    }

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided hrEmailId" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Submit data for Candidate from HrRejectedCandidateFormData with this API
export const sendRejectedCandidateData = async (req, res) => {
  const {
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    Rejection_Date,
    Rejection_Remark,
    Rejection_Description,
  } = req.body;

  const hrRejectedCandidateFormData = new HrRejectedCandidateFormData({
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    Rejection_Date,
    Rejection_Remark,
    Rejection_Description,
  });

  try {
    await hrRejectedCandidateFormData.save();
    res.status(200).json({ message: "Data submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch Rejected data from HrRejectedCandidateFormData with this API
export const fetchRejectedCandidateData = async (req, res) => {
  try {
    let query = {};
    const { hrEmailId } = req.params;
    const { Status, filter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            appliedDate: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            appliedDate: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            appliedDate: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            appliedDate: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
    }

    if (!hrEmailId) {
      const data = await HrRejectedCandidateFormData.find({ ...query });
      return res.status(200).json(data);
    }

    let userData;

    if (Status) {
      userData = await HrRejectedCandidateFormData.find({
        hrEmailId,
        Status,
        ...query,
      });
    } else {
      userData = await HrRejectedCandidateFormData.find({
        hrEmailId,
        ...query,
      });
    }

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided hrEmailId" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Submit data for Candidate from HrBlacklistedCandidateFormData with this API
export const sendBlacklistedCandidateData = async (req, res) => {
  const {
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    Blacklist_Date,
    Blacklist_Description,
  } = req.body;

  const hrBlacklistedCandidateFormData = new HrBlacklistedCandidateFormData({
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    Blacklist_Date,
    Blacklist_Description,
  });

  try {
    await hrBlacklistedCandidateFormData.save();
    res.status(200).json({ message: "Data submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch Blacklisted data from HrBlacklistedCandidateFormData with this API
export const fetchBlacklistedCandidateData = async (req, res) => {
  try {
    let query = {};
    const { hrEmailId } = req.params;
    const { Status, filter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            appliedDate: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            appliedDate: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            appliedDate: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            appliedDate: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
    }

    if (!hrEmailId) {
      const data = await HrBlacklistedCandidateFormData.find({ ...query });
      return res.status(200).json(data);
    }

    let userData;

    if (Status) {
      userData = await HrBlacklistedCandidateFormData.find({
        hrEmailId,
        Status,
        ...query,
      });
    } else {
      userData = await HrBlacklistedCandidateFormData.find({
        hrEmailId,
        ...query,
      });
    }

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided hrEmailId" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Confirmed Candidate Data after submit API
export const deleteConfirmedCandidateData = async (req, res) => {
  const id = req.params.id;
  try {
    await HrConfirmedCandidateFormData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit data for candidate from HrConfirmedCandidateFormData with this API
export const blacklistConfirmedCandidate = async (req, res) => {
  const {
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    DOB,
    DOJ,
    Aadhar_No,
    Qualification,
    Local_Outstation,
    Pan_No,
    Bank_Name,
    Account_Number,
    IFSC_Code,
    Branch,
    Process,
    Designation,
    CTC,
    In_Hand,
    Permanent_Address,
    Current_Address,
    City,
    Emergency_Contact_No,
    Contact_No_Relation,
    Verification_Status,
    Father_Husband_Aadhar_No,
    Relation,
    Father_Husband_DOB,
    Mother_Name,
    Mother_Aadhar_No,
    Mother_DOB,
    Spouse_Name,
    Spouse_Aadhar_No,
    Spouse_DOB,
    Blacklist_Date,
    Blacklist_Description,
  } = req.body;

  const hrBlacklistedCandidateFormData = new HrBlacklistedCandidateFormData({
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    DOB,
    DOJ,
    Aadhar_No,
    Qualification,
    Local_Outstation,
    Pan_No,
    Bank_Name,
    Account_Number,
    IFSC_Code,
    Branch,
    Process,
    Designation,
    CTC,
    In_Hand,
    Permanent_Address,
    Current_Address,
    City,
    Emergency_Contact_No,
    Contact_No_Relation,
    Verification_Status,
    Father_Husband_Aadhar_No,
    Relation,
    Father_Husband_DOB,
    Mother_Name,
    Mother_Aadhar_No,
    Mother_DOB,
    Spouse_Name,
    Spouse_Aadhar_No,
    Spouse_DOB,
    Blacklist_Date,
    Blacklist_Description,
  });

  try {
    await hrBlacklistedCandidateFormData.save();
    res.status(200).json({ message: "Data submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Submit data for candidate from HrConfirmedCandidateFormData with this API
export const exitConfirmedCandidate = async (req, res) => {
  const {
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    DOB,
    DOJ,
    Aadhar_No,
    Qualification,
    Local_Outstation,
    Pan_No,
    Bank_Name,
    Account_Number,
    IFSC_Code,
    Branch,
    Process,
    Designation,
    CTC,
    In_Hand,
    Permanent_Address,
    Current_Address,
    City,
    Emergency_Contact_No,
    Contact_No_Relation,
    Verification_Status,
    Father_Husband_Aadhar_No,
    Relation,
    Father_Husband_DOB,
    Mother_Name,
    Mother_Aadhar_No,
    Mother_DOB,
    Spouse_Name,
    Spouse_Aadhar_No,
    Spouse_DOB,
    Exit_Date,
    Exit_Description,
  } = req.body;

  const hrExitedCandidateFormData = new HrExitedCandidateFormData({
    Status,
    Candidate_Name,
    Father_Husband_Name,
    Mobile_No,
    Candidate_Email,
    Candidate_Location,
    experience,
    experience_year,
    experience_type,
    hrEmailId,
    appliedDate,
    DOB,
    DOJ,
    Aadhar_No,
    Qualification,
    Local_Outstation,
    Pan_No,
    Bank_Name,
    Account_Number,
    IFSC_Code,
    Branch,
    Process,
    Designation,
    CTC,
    In_Hand,
    Permanent_Address,
    Current_Address,
    City,
    Emergency_Contact_No,
    Contact_No_Relation,
    Verification_Status,
    Father_Husband_Aadhar_No,
    Relation,
    Father_Husband_DOB,
    Mother_Name,
    Mother_Aadhar_No,
    Mother_DOB,
    Spouse_Name,
    Spouse_Aadhar_No,
    Spouse_DOB,
    Exit_Date,
    Exit_Description,
  });

  try {
    await hrExitedCandidateFormData.save();
    res.status(200).json({ message: "Data submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch Exited data from HrExitedCandidateFormData with this API
export const fetchExitedCandidateData = async (req, res) => {
  try {
    let query = {};
    const { hrEmailId } = req.params;
    const { Status, filter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            appliedDate: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            appliedDate: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            appliedDate: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            appliedDate: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
    }

    if (!hrEmailId) {
      const data = await HrExitedCandidateFormData.find({ ...query });
      return res.status(200).json(data);
    }

    let userData;

    if (Status) {
      userData = await HrExitedCandidateFormData.find({
        hrEmailId,
        Status,
        ...query,
      });
    } else {
      userData = await HrExitedCandidateFormData.find({
        hrEmailId,
        ...query,
      });
    }

    if (!userData) {
      return res
        .status(404)
        .json({ message: "No data found for the provided hrEmailId" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
