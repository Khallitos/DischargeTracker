import Upload from "../models/Upload.js";
import BadRequestError from "../errors/bad-request.js";
import { nanoid } from "nanoid";
import mongoose from "mongoose";
import { request } from "express";
import * as yup from 'yup';

const cargoDetailsSchema = yup.object().shape({
  vesselName: yup.string().required().min(3).matches(/^[^<>]*$/, "Invalid characters: <, >"),
});

// ADD SINGLE CARGO DETAILS
const singleCargoDetails = async (req, res) => {
  const cargoDetails = req.body;

  try {
    // Validate the cargo details using the schema
    await cargoDetailsSchema.validate(cargoDetails);

    const cargoId = "cargo" + nanoid();

    const { vesselName } = cargoDetails;

    const insertCargoDetails = await Upload.create({ vesselName });

    res.status(201).json(insertCargoDetails);
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

export {
  singleCargoDetails,
 
};
