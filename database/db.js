import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI;

const db = () => {
  mongoose.connect(mongo_uri, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully...");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database ", error.message);
  });
};

export default db;
