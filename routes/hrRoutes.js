import express from "express";
import {
  blacklistConfirmedCandidate,
  deleteConfirmedCandidateData,
  deleteSalaryOfferedData,
  exitConfirmedCandidate,
  fetchBlacklistedCandidateData,
  fetchConfirmedCandidateData,
  fetchExitedCandidateData,
  fetchInterviewedCandidate,
  fetchRejectedCandidateData,
  fetchSalaryOfferedCandidate,
  hrFormAllData,
  sendBlacklistedCandidateData,
  sendConfirmedCandidateData,
  sendRejectedCandidateData,
} from "../controllers/hrContorllers.js";

const hr_routes = express.Router();

hr_routes.post("/hr_submit_form_data", hrFormAllData);
hr_routes.get(
  "/hr_interviewed_candidate/:hrEmailId?",
  fetchInterviewedCandidate
);
hr_routes.get(
  "/hr_salary_offered_candidate/:hrEmailId?",
  fetchSalaryOfferedCandidate
);

hr_routes.delete("/deleteSalaryOfferedData/:id", deleteSalaryOfferedData);

hr_routes.post("/submit-confirmedCandidate-data", sendConfirmedCandidateData);

hr_routes.get(
  "/fetch-confirmedCandidate-data/:hrEmailId?",
  fetchConfirmedCandidateData
);

hr_routes.post("/submit-rejectedCandidate-data", sendRejectedCandidateData);

hr_routes.get(
  "/fetch-rejectedCandidate-data/:hrEmailId?",
  fetchRejectedCandidateData
);

hr_routes.post(
  "/submit-blacklistedCandidate-data",
  sendBlacklistedCandidateData
);

hr_routes.get(
  "/fetch-blacklistedCandidate-data/:hrEmailId?",
  fetchBlacklistedCandidateData
);

hr_routes.delete(
  "/deleteConfirmedCandidateData/:id?",
  deleteConfirmedCandidateData
);

hr_routes.post(
  "/submit-blacklistConfirmedCandidate-data",
  blacklistConfirmedCandidate
);

hr_routes.post("/submit-exitConfirmedCandidate-data", exitConfirmedCandidate);

hr_routes.get(
  "/fetch-exitedCandidate-data/:hrEmailId?",
  fetchExitedCandidateData
);

export default hr_routes;
