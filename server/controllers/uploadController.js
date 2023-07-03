import Upload from "../models/Upload.js";
import ReceivingTerminalDetails from "../models/ReceivingTerminalSchema.js";
import BadRequestError from "../errors/bad-request.js";
import { nanoid } from "nanoid";
import mongoose from "mongoose";
import { request } from "express";
import * as yup from "yup";
import { doubleParcelValidationSchema } from "../validations/doubleParcelValidationSchema.js";
import { singleParcelValidationSchema } from "../validations/singleParcelValidationSchema.js";

// ADD SINGLE CARGO DETAILS
const singleParcelDetails = async (req, res) => {
  try {
    const { vesselData } = req.body;
    console.log(vesselData);

    const isValidVesselDetails = await singleParcelValidationSchema.validate(
      vesselData
    );
    if (isValidVesselDetails) {
      console.log("Yesirrr");
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      // Return a 400 Bad Request error if the data does not match the schema
      throw new BadRequestError(error.message);
    } else {
      // Otherwise, return a 500 Internal Server Error
      throw new BadRequestError(
        "Invalid details please contact system administrator"
      );
    }
  }
};

const doubleParcelDetails = async (req, res) => {
  try {
    const { vesselData } = req.body;
    console.log(vesselData)
    const isValidateDoubleVesselDetails = await doubleParcelValidationSchema.validate(vesselData);
    if (isValidateDoubleVesselDetails) {
      console.log("yessirrrr")
    } else {
      
    }
  } catch (e) {
    if (error instanceof yup.ValidationError) {
      // Return a 400 Bad Request error if the data does not match the schema
      throw new BadRequestError(error.message);
    } else {
      // Otherwise, return a 500 Internal Server Error
      throw new BadRequestError(
        "Invalid details please contact system administrator"
      );
    }
  }
};
//   const vesselDetails = finalData.vesselFormData;

//   const isValidateVesselDetails = await vesselDetailsSchema.validate(
//     vesselDetails
//   );

//   if (isValidateVesselDetails) {

//   }

//   else {
//     //     res.status(201).json(insertCargoDetails);
//     //   }
//   }
// } catch (e) {

// }

// try {
//   // Validate the cargo details using the schema
//   const validateDetails = await cargoDetailsSchema.validate(cargoDetails);
//   if (validateDetails) {
//     const cargoId = "cargo" + nanoid();
//     const {
//       vesselName,
//       productType,
//       receivingTerminal,
//       vesselArrivalDate,
//       vesselDepartureDate,
//       BillOfLading,
//       vesselGOV,
//       vesselDensity15,
//       vesselGSV,
//       vesselMetricTonesVAC,
//       vesselMetricTonesAIR,
//       linePacking,
//       receivingTerminalMTAIR20,
//       receivingTerminalMTVAC20,
//       receivingTerminalGSV20,
//       receivingTerminalMTAIR,
//       receivingTerminalMTVAC,
//       receivingTerminalGSV,
//       receivingTerminalVCF,
//       receivingTerminalTemperature,
//       receivingTerminalWCF,
//       receivingTerminalDensity,
//       receivingTerminalGOV,
//       mogsTerminalMTAIR20,
//       mogsTerminalMTVAC20,
//       mogsTerminalGSV20,
//       mogsTerminalVCF,
//       mogsTerminalDensity20,
//       mogsFlowmeterReading,
//     } = cargoDetails;
//     const insertCargoDetails = await Upload.create({
//       cargoId,
//       vesselName,
//       productType,
//       receivingTerminal,
//       vesselArrivalDate,
//       vesselDepartureDate,
//       BillOfLading,
//       vesselGOV,
//       vesselDensity15,
//       vesselGSV,
//       vesselMetricTonesVAC,
//       vesselMetricTonesAIR,
//       linePacking,
//     });

//     const insertReceivingTerminalDetails = await ReceivingTerminalDetails.create({
//       cargoId,
//       receivingTerminalMTAIR20,
//       receivingTerminalMTVAC20,
//       receivingTerminalGSV20,
//       receivingTerminalMTAIR,
//       receivingTerminalMTVAC,
//       receivingTerminalGSV,
//       receivingTerminalVCF,
//       receivingTerminalTemperature,
//       receivingTerminalWCF,
//       receivingTerminalDensity,
//       receivingTerminalGOV,
//       mogsTerminalMTAIR20,
//       mogsTerminalMTVAC20,
//       mogsTerminalGSV20,
//       mogsTerminalVCF,
//       mogsTerminalDensity20,
//       mogsFlowmeterReading,
//     });
//     console.log(insertReceivingTerminalDetails)
//   } else {
//     res.status(201).json(insertCargoDetails);
//   }
// } catch (error) {
//   if (error instanceof yup.ValidationError) {
//     // Return a 400 Bad Request error if the data does not match the schema
//     throw new BadRequestError(error.message);
//   } else {
//     // Otherwise, return a 500 Internal Server Error
//     throw error;
//   }
// }

export { singleParcelDetails, doubleParcelDetails };
