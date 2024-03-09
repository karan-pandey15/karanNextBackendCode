import express from "express";
import multer from "multer";
import xlsx from "xlsx";
import fs from "fs";
import { SentLoanDataToPartner, PEmployee } from "../models/partnerModels.js";

const sendDataToPartnerRoute = express();

const upload = multer({ dest: "./uploads/sentLoanDataToPartner" });

sendDataToPartnerRoute.post(
  "/send-data-to-partner",
  upload.single("xlsxFile"),
  async (req, res) => {
    try {
      const { partnerName, partnerEmail } = req.body;

      const partner = await PEmployee.findOne({ email: partnerEmail });

      if (!partner) {
        return res.status(404).json({ message: "Partner not found" });
      }

      const results = [];
      const workbook = xlsx.read(fs.readFileSync(req.file.path), {
        type: "buffer",
      });
      const sheetName = workbook.SheetNames[0];
      const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

      data.forEach((rowData) => {
        results.push({
          partnerName,
          partnerEmail,
          loanType: rowData.loanType,
          bankName: rowData.bankName,
          customerName: rowData.customerName,
          fatherName: rowData.fatherName,
          motherName: rowData.motherName,
          mobileNo: rowData.mobileNo,
          mailId: rowData.mailId,
          panCardNo: rowData.panCardNo,
          AadharCardNo: rowData.AadharCardNo,
          ImploymentType: rowData.ImploymentType,
          PerMonthSalary: rowData.PerMonthSalary,
          customerLocation: rowData.customerLocation,
          companyName: rowData.companyName,
          dob: rowData.dob,
          gender: rowData.gender,
          religion: rowData.religion,
          appliedAmount: rowData.appliedAmount,
          appliedDate: rowData.appliedDate,
        });
      });

      try {
        await SentLoanDataToPartner.insertMany(results);
        return res
          .status(200)
          .json({ message: "Data sent to partner dashboard" });
      } catch (error) {
        console.error("Error saving data to database:", error);
        res.status(500).json({ message: "Internal Server Error" });
      } finally {
        fs.unlinkSync(req.file.path);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Route to get the list of sent data for each partner
sendDataToPartnerRoute.get("/sent-partner-leads", async (req, res) => {
  try {
    const sentData = await SentLoanDataToPartner.find();

    const partnerLeads = sentData.map((data) => ({
      partnerName: data.partnerName,
      partnerEmail: data.partnerEmail,
      leads: [
        {
          loanType: data.loanType,
          bankName: data.bankName,
          customerName: data.customerName,
          fatherName: data.fatherName,
          motherName: data.motherName,
          mobileNo: data.mobileNo,
          mailId: data.mailId,
          panCardNo: data.panCardNo,
          AadharCardNo: data.AadharCardNo,
          ImploymentType: data.ImploymentType,
          PerMonthSalary: data.PerMonthSalary,
          customerLocation: data.customerLocation,
          companyName: data.companyName,
          dob: data.dob,
          gender: data.gender,
          religion: data.religion,
          appliedAmount: data.appliedAmount,
          appliedDate: data.appliedDate,
          sentDate: data.sentDate,
        },
      ],
    }));

    res.status(200).json(partnerLeads);
  } catch (error) {
    console.error("Error retrieving partner leads:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to get the list of sent data for a specific partner
sendDataToPartnerRoute.get(
  "/sent-partner-leads/:partnerEmail",
  async (req, res) => {
    try {
      const partnerEmail = req.params.partnerEmail;

      const partner = await SentLoanDataToPartner.findOne({
        partnerEmail: partnerEmail,
      });

      if (!partner) {
        return res.status(404).json({ message: "Partner not found" });
      }

      const sentData = await SentLoanDataToPartner.find({ partnerEmail });

      const partnerLeads = sentData.map((data) => ({
        partnerName: data.partnerName,
        partnerEmail: data.partnerEmail,
        leads: [
          {
            loanType: data.loanType,
            bankName: data.bankName,
            customerName: data.customerName,
            fatherName: data.fatherName,
            motherName: data.motherName,
            mobileNo: data.mobileNo,
            mailId: data.mailId,
            panCardNo: data.panCardNo,
            AadharCardNo: data.AadharCardNo,
            ImploymentType: data.ImploymentType,
            PerMonthSalary: data.PerMonthSalary,
            customerLocation: data.customerLocation,
            companyName: data.companyName,
            dob: data.dob,
            gender: data.gender,
            religion: data.religion,
            appliedAmount: data.appliedAmount,
            appliedDate: data.appliedDate,
            sentDate: data.sentDate,
          },
        ],
      }));

      res.status(200).json(partnerLeads);
    } catch (error) {
      console.error("Error retrieving partner leads:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default sendDataToPartnerRoute;
