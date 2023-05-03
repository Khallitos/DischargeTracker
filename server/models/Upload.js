import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

const UploadSchema = new mongoose.Schema({
  vesselName: {
    type: String,
    required: [true, "Please provide a vessel name"],
    minlength: 3,
    trim: true,
  },
});

export default mongoose.model("cargoDetails", UploadSchema);
