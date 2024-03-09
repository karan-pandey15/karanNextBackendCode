import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import routes from "./routes/router.js";
import csv_route from "./routes/Uploadcsv.js";
import db from "./database/db.js";
import path from "path";
import { fileURLToPath } from "url";
import cibil_issue from "./routes/CibilIssue.js";
import partner_csv_route from "./routes/partnerUploadcsv.js";
import career_route from "./routes/Careerform.js";
import sendDataToPartner_route from "./routes/sendDataToPartner.js";
import employeeProfile from "./routes/employeeProfile.js";
import contact_route from "./routes/ContactForm.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("directory-name 👉️", __dirname);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

db();

app.use(cookieParser());

// Set up your routes
app.use("/api", routes);
app.use("/api", csv_route);
app.use("/api", partner_csv_route);
app.use("/api", cibil_issue);
app.use("/api", career_route);
app.use("/api", sendDataToPartner_route);
app.use("/api", employeeProfile);
app.use("/api", contact_route);

app.use(express.static(path.join(__dirname, "public")));

app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "sample.csv");
  res.download(filePath, "data.csv");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
