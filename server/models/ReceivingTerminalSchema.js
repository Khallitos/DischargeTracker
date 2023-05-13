import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

const ReceivingTerminalSchema = new mongoose.Schema({
  cargoId: {
    type: String,
  },
  receivingTerminalMTAIR20: {
    type: Number,
    required: [true],
  },
  receivingTerminalMTVAC20: {
    type: Number,
    required: [true],
  },
  receivingTerminalGSV20: {
    type: Number,
    required: [true],
  },
  receivingTerminalMTAIR: {
    type: Number,
    required: [true],
  },
  receivingTerminalMTVAC: {
    type: Number,
    required: [true],
  },
  receivingTerminalGSV: {
    type: Number,
    required: [true],
  },
  receivingTerminalVCF: {
    type: Number,
    required: [true],
  },
  receivingTerminalTemperature: {
    type: Number,
    required: [true],
  },
  receivingTerminalWCF: {
    type: Number,
    required: [true],
  },
  receivingTerminalDensity: {
    type: Number,
    required: [true],
  },
  receivingTerminalGOV: {
    type: Number,
    required: [true],
  },
  mogsTerminalMTAIR20: {
    type: Number,
    required: [true],
  },
  mogsTerminalMTVAC20: {
    type: Number,
    required: [true],
  },
  mogsTerminalGSV20: {
    type: Number,
    required: [true],
  },
  mogsTerminalVCF: {
    type: Number,
    required: [true],
  },
  mogsTerminalDensity20: {
    type: Number,
    required: [true],
  },
  mogsFlowmeterReading: {
    type: Number,
    required: [true],
  },
});

export default mongoose.model(
  "ReceivingTerminalDetails",
  ReceivingTerminalSchema
);
