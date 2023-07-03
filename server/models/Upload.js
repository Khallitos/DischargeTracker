import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

const receivingTerminalSchema = new mongoose.Schema({
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
})

const UploadSchema = new mongoose.Schema({
  cargoId: {
    type: String,
  },
  vesselName: {
    type: String,
    required: [true],

  },
  productType: {
    type: String,
    required: [true],

  },
  receivingTerminal: {
    type: String,
    required: [true],

  },
  vesselArrivalDate: {
    type: Date,
    required: [true],

  },
  vesselDepartureDate: {
    type: Date,
    required: [true],

  },
  BillOfLading: {
    type: String,
    required: [true],

  },
  vesselGOV: {
    type: Number,
    required: [true],

  },
  vesselDensity15: {
    type: Number,
    required: [true],

  },

  vesselGSV: {
    type: Number,
    required: [true],
  },
  vesselMetricTonesVAC: {
    type: Number,
    required: [true],
  },
  vesselMetricTonesAIR: {
    type: Number,
    required: [true],
  },
  linePacking: {
    type: Number,
    required: [true],
  }, 

  receivingTerminals: [receivingTerminalSchema],
});

export default mongoose.model("vesselDetails", UploadSchema);
