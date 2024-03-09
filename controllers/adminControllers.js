import {
  CibilIssueData,
  Customer,
  CustomerCardData,
  CustomerInsuranceData,
  CustomerLoanData,
} from "../models/customerModels.js";

import {
  DisbursedData,
  Employee,
  FormalData,
  PendingFormData,
  RejectedData,
} from "../models/employeeModels.js";

import moment from "moment";
import { PEmployee } from "../models/partnerModels.js";

// fetch all the data from FormalData with this API
export const getAdminFormAllData = async (req, res) => {
  try {
    let query = {};
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

    const userData = await FormalData.find(query);

    if (!userData) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from pendingFormData with this API
export const fetchAdminPendingData = async (req, res) => {
  try {
    const { Status } = req.params;
    let query = {};
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

    const userData = await PendingFormData.find({ Status, ...query });

    if (!userData) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from DisbursedData with this API
export const fetchAdminDisbursedData = async (req, res) => {
  try {
    const { Status } = req.params;
    let query = {};
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

    const userData = await DisbursedData.find({ Status, ...query });

    if (!userData) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from RejectedData with this API
export const fetchAdminRejectedData = async (req, res) => {
  try {
    const { Status } = req.params;
    let query = {};
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

    const userData = await RejectedData.find({ Status, ...query });

    if (!userData) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Fetch Team Leaders details
export const teamLeaderDetails = async (req, res) => {
  try {
    const employees = await Employee.find({ userType: "Team Leader" });

    return res.status(200).json({ employees });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const partnerDetails = async (req, res) => {
  try {
    const employees = await PEmployee.find({ userType: "Partner" });

    return res.status(200).json({ employees });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch hr details
export const hrDetails = async (req, res) => {
  try {
    const employees = await Employee.find({ userType: "Hr" });

    return res.status(200).json({ employees });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Login Lead Data API
export const deleteLoginLeadData = async (req, res) => {
  const id = req.params.id;
  try {
    await FormalData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Pending Data API
export const deletePendingData = async (req, res) => {
  const id = req.params.id;
  try {
    await PendingFormData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Disbursed Data API
export const deleteDisbursedData = async (req, res) => {
  const id = req.params.id;
  try {
    await DisbursedData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Rejected Data API
export const deleteRejectedData = async (req, res) => {
  const id = req.params.id;
  try {
    await RejectedData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch CustomerLoanData with this API
export const getCustomerLoanData = async (req, res) => {
  try {
    const loanData = await CustomerLoanData.find({});

    if (!loanData || loanData.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(loanData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete CustomerLoanData with this API
export const deleteCustomerLoanData = async (req, res) => {
  const id = req.params.id;
  try {
    await CustomerLoanData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get customer Card data with this API
export const getCustomerCardData = async (req, res) => {
  try {
    const cardData = await CustomerCardData.find({});

    if (!cardData || cardData.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(cardData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete customer Card data with this API
export const deleteCustomerCarddata = async (req, res) => {
  const id = req.params.id;
  try {
    await CustomerCardData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get cibilIssue data with this Api
export const getCibilData = async (req, res) => {
  try {
    const cibilData = await CibilIssueData.find({});

    if (!cibilData || cibilData.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(cibilData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// delete cibilIssue data with this Api
export const deleteCibileIssuedata = async (req, res) => {
  const id = req.params.id;
  try {
    await CibilIssueData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch CustomerInsuranceData with this API
export const getCustomerInsuranceData = async (req, res) => {
  try {
    const insuranceData = await CustomerInsuranceData.find({});

    if (!insuranceData || insuranceData.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(insuranceData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete CustomerInsuranceData with this API
export const deleteCustomerInsuranceData = async (req, res) => {
  const id = req.params.id;
  try {
    await CustomerInsuranceData.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Signed Up Customer Data
export const getSignedUpCustomerData = async (req, res) => {
  try {
    let query = {};
    const { filter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Inquiry_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Inquiry_Date: {
              $gte: moment().subtract(30, "days").startOf("day"),
            },
          };
          break;
        case "lastday":
          query = {
            Inquiry_Date: {
              $gte: moment().startOf("day"),
              $lte: moment().endOf("day"),
            },
          };
          break;
        case "from1to31":
          query = {
            Inquiry_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
    }

    const signedUpCustomerData = await Customer.find({ ...query });
    if (!signedUpCustomerData) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(signedUpCustomerData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Signed Up Customer Data with this API
export const deleteSignedUpCustomerData = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findByIdAndDelete(id);

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
