import { EmployeeProfileModel } from "../models/employeeModels.js";
import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import express from "express";

const employeeProfile = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/employees/");
  },
  filename: (req, file, cb) => {
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images are allowed."));
  }
};

const upload = multer({ storage, fileFilter });

employeeProfile.post(
  "/profile",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "pancardphoto", maxCount: 1 },
    { name: "aadharcardphotoFront", maxCount: 1 },
    { name: "aadharcardphotoBack", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ error: "No files were uploaded." });
      }

      const {
        fullName,
        mobile,
        personalemail,
        fathername,
        mothername,
        dob,
        pancardno,
        gender,
        religion,
        maritalstatus,
        spousename,
        qualification,
        propertystatus,
        currentaddressline,
        currentcity,
        currentstate,
        currentpin,
        permanentaddressline,
        permanentcity,
        permanentstate,
        permanentpin,
        designation,
        totalworkexperience,
        aadharcardno,
      } = req.body;

      const image = req.files["image"] ? req.files["image"][0].filename : null;
      const pancardphoto = req.files["pancardphoto"]
        ? req.files["pancardphoto"][0].filename
        : null;
      const aadharcardfront = req.files["aadharcardphotoFront"]
        ? req.files["aadharcardphotoFront"][0].filename
        : null;
      const aadharcardback = req.files["aadharcardphotoBack"]
        ? req.files["aadharcardphotoBack"][0].filename
        : null;

      const userProfile = new EmployeeProfileModel({
        fullName,
        mobile,
        personalemail,
        fathername,
        mothername,
        dob,
        pancardno,
        gender,
        religion,
        maritalstatus,
        spousename,
        qualification,
        propertystatus,
        currentaddressline,
        currentcity,
        currentstate,
        currentpin,
        permanentaddressline,
        permanentcity,
        permanentstate,
        permanentpin,
        designation,
        totalworkexperience,
        image,
        pancardphoto,
        aadharcardphotoFront: aadharcardfront,
        aadharcardphotoBack: aadharcardback,
        aadharcardno,
      });

      await userProfile.save();
      res.status(201).json({ message: "Profile saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

export default employeeProfile;
