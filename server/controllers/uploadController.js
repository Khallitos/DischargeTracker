import Upload from "../models/Upload.js";
import ReceivingTerminalDetails from "../models/ReceivingTerminalSchema.js";
import BadRequestError from "../errors/bad-request.js";
import { nanoid } from "nanoid";
import mongoose from "mongoose";
import { request } from "express";
import * as yup from "yup";

const cargoDetailsSchema = yup.object().shape({
  vesselName: yup
    .string()
    .required()
    .matches(/^[^<>]*$/, "Invalid characters: <, >"),
  productType: yup.string().required(),
  receivingTerminal: yup.string().required(),
  vesselArrivalDate: yup.date().required(),
  vesselDepartureDate: yup.date().required(),
  BillOfLading: yup.string().required(),
  vesselGOV: yup.number().required(),
  vesselDensity15: yup.number().required(),
  vesselGSV: yup.number().required(),
  vesselMetricTonesVAC: yup.number().required(),
  vesselMetricTonesAIR: yup.number().required(),
  linePacking: yup.number().required(),
  receivingTerminalMTAIR20: yup.number().required(),
  receivingTerminalMTVAC20: yup.number().required(),
  receivingTerminalGSV20: yup.number().required(),
  receivingTerminalMTAIR: yup.number().required(),
  receivingTerminalMTVAC: yup.number().required(),
  receivingTerminalGSV: yup.number().required(),
  receivingTerminalVCF: yup.number().required(),
  receivingTerminalTemperature: yup.number().required(),
  receivingTerminalWCF: yup.number().required(),
  receivingTerminalDensity: yup.number().required(),
  receivingTerminalGOV: yup.number().required(),
  mogsTerminalMTAIR20: yup.number().required(),
  mogsTerminalMTVAC20: yup.number().required(),
  mogsTerminalGSV20: yup.number().required(),
  mogsTerminalVCF: yup.number().required(),
  mogsTerminalDensity20: yup.number().required(),
  mogsFlowmeterReading: yup.number().required(),
});

// ADD SINGLE CARGO DETAILS
const singleCargoDetails = async (req, res) => {
  const cargoDetails = req.body;
  console.log(cargoDetails);

  try {
    // Validate the cargo details using the schema
    const validateDetails = await cargoDetailsSchema.validate(cargoDetails);
    if (validateDetails) {
      const cargoId = "cargo" + nanoid();
      const {
        vesselName,
        productType,
        receivingTerminal,
        vesselArrivalDate,
        vesselDepartureDate,
        BillOfLading,
        vesselGOV,
        vesselDensity15,
        vesselGSV,
        vesselMetricTonesVAC,
        vesselMetricTonesAIR,
        linePacking,
        receivingTerminalMTAIR20,
        receivingTerminalMTVAC20,
        receivingTerminalGSV20,
        receivingTerminalMTAIR,
        receivingTerminalMTVAC,
        receivingTerminalGSV,
        receivingTerminalVCF,
        receivingTerminalTemperature,
        receivingTerminalWCF,
        receivingTerminalDensity,
        receivingTerminalGOV,
        mogsTerminalMTAIR20,
        mogsTerminalMTVAC20,
        mogsTerminalGSV20,
        mogsTerminalVCF,
        mogsTerminalDensity20,
        mogsFlowmeterReading,
      } = cargoDetails;
      const insertCargoDetails = await Upload.create({
        cargoId,
        vesselName,
        productType,
        receivingTerminal,
        vesselArrivalDate,
        vesselDepartureDate,
        BillOfLading,
        vesselGOV,
        vesselDensity15,
        vesselGSV,
        vesselMetricTonesVAC,
        vesselMetricTonesAIR,
        linePacking,
      });

      const insertReceivingTerminalDetails = await ReceivingTerminalDetails.create({
        cargoId,
        receivingTerminalMTAIR20,
        receivingTerminalMTVAC20,
        receivingTerminalGSV20,
        receivingTerminalMTAIR,
        receivingTerminalMTVAC,
        receivingTerminalGSV,
        receivingTerminalVCF,
        receivingTerminalTemperature,
        receivingTerminalWCF,
        receivingTerminalDensity,
        receivingTerminalGOV,
        mogsTerminalMTAIR20,
        mogsTerminalMTVAC20,
        mogsTerminalGSV20,
        mogsTerminalVCF,
        mogsTerminalDensity20,
        mogsFlowmeterReading,
      });
      console.log(insertReceivingTerminalDetails)
    } else {
      res.status(201).json(insertCargoDetails);
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      // Return a 400 Bad Request error if the data does not match the schema
      throw new BadRequestError(error.message);
    } else {
      // Otherwise, return a 500 Internal Server Error
      throw error;
    }
  }
};

export { singleCargoDetails };
