import mongoose from "mongoose";

export const connectionDb = async () => {
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/session")
    .then((result) => console.log("DB connection success"))
    .catch((err) => console.log("DB connection fail",err));
};


