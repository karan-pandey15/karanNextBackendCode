import express from "express";
import multer from "multer";
import fs from "fs";
import { CareerFormData } from "../models/customerModels.js";

const career_route = express();

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API endpoint for handling form submission
career_route.post(
  "/career_form",
  upload.single("Upload_CV"),
  async (req, res) => {
    try {
      const formData = req.body;
      const cvFile = req.file;

      const formDataEntry = new CareerFormData({
        ...formData,
        Upload_CV: cvFile ? cvFile.buffer : null,
      });
      await formDataEntry.save();

      if (cvFile) {
        const filePath = `uploads/JobApplier_CV/${formDataEntry._id}.pdf`;
        fs.writeFileSync(filePath, cvFile.buffer);
      }

      res
        .status(200)
        .json({ message: "Form data received and stored successfully." });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// API endpoint for getting form data
career_route.get("/get_career_form", async (req, res) => {
  try {
    const formData = await CareerFormData.find();
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint for getting CV data by CV ID
career_route.get("/get_cv/:cvId", async (req, res) => {
  try {
    const cvId = req.params.cvId;

    const formDataEntry = await CareerFormData.findById(cvId);

    if (!formDataEntry || !formDataEntry.Upload_CV) {
      return res.status(404).json({ error: "CV not found" });
    }

    // Set response headers for PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=${formDataEntry._id}.pdf`
    );

    res.status(200).end(formDataEntry.Upload_CV);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default career_route;
