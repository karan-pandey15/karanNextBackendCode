import { Contact } from "../models/customerModels.js";
import express from "express";
import moment from "moment";

const contact_route = express();

contact_route.post("/contact-submit-form", (req, res) => {
  const formData = req.body;
  const newContact = new Contact(formData);
  newContact
    .save()
    .then(() =>
      res.status(200).json({ message: "Form submitted successfully" })
    )
    .catch((err) =>
      res.status(400).json({ error: "Error submitting form", details: err })
    );
});

contact_route.get("/get_inquiry_data", async (req, res) => {
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

    const contactData = await Contact.find({ ...query });
    if (!contactData) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(contactData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default contact_route;
