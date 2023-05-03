import Upload from "../models/Upload.js";
import BadRequestError from "../errors/bad-request.js";
import { nanoid } from "nanoid";
import mongoose from "mongoose";
import { request } from "express";

// ADD SINGLE CARGO DETAILS
const singleCargoDetails = async (req, res) => {
  const cargoDetails = req.body;
  const cargoId = "cargo" + nanoid() 

  const {
    vesselName,
    productType,
    receivingTerminal,
    vesselArrivalDatecargoData,
    vesselDepartureDate,
    BillOfLading,
    vesselGOV,
    vesselDensity15,
    vesselGSV,
    vesselMetricTonesVAC,
    vesselMetricTonesAIR,
    linePacking,
    receivingTerminalGOV,
    receivingTerminalDensity,
    receivingTerminalWCF,
    receivingTerminalTemperature,
    receivingTerminalVCF,
    receivingTerminalGSV,
    receivingTerminalMTVAC,
    receivingTerminalMTAIR,
    receivingTerminalGSV20,
    receivingTerminalMTVAC20,
    receivingTerminalMTAIR20,
    mogsFlowmeterReading,
    mogsTerminalDensity20,
    mogsTerminalVCF,
    mogsTerminalGSV20,
    mogsTerminalMTVAC20,
    mogsTerminalMTAIR20,
  } = cargoDetails;
 const insertCargoDetails = await Upload.create({vesselName})
console.log(insertCargoDetails)
};


export {
  singleCargoDetails,
 
};
