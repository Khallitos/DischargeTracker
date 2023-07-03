import * as yup from "yup";

export const singleParcelValidationSchema = yup.object().shape({
  parcelType: yup.string().required(),
  vesselName: yup.string().required(),
  productType: yup.string().required(),
  vesselArrivalDate: yup.date().required(),
  vesselDepartureDate: yup.date().required(),
  BillOfLading: yup.string().required(),
  vesselGOV: yup.string().required(),
  vesselDensity15: yup.string().required(),
  vesselGSV: yup.string().required(),
  vesselMetricTonesVAC: yup.string().required(),
  vesselMetricTonesAIR: yup.string().required(),
  linePacking: yup.string().required(),
  terminalDetails: yup.array().of(
    yup.object().shape({
      receivingTerminalGOV: yup.string().required(),
      receivingTerminal: yup.string().required(),
      receivingTerminalDensity: yup.number().required(),
      receivingTerminalWCF: yup.number().required(),
      receivingTerminalTemperature: yup.number().required(),
      receivingTerminalVCF: yup.number().required(),
      receivingTerminalGSV: yup.number().required(),
      receivingTerminalMTVAC: yup.number().required(),
      receivingTerminalMTAIR: yup.number().required(),
      receivingTerminalGSV20: yup.number().required(),
      receivingTerminalMTVAC20: yup.number().required(),
      receivingTerminalMTAIR20: yup.number().required(),
      mogsFlowmeterReading: yup.number().required(),
      mogsTerminalDensity20: yup.number().required(),
      mogsTerminalVCF: yup.number().required(),
      mogsTerminalGSV20: yup.number().required(),
      mogsTerminalMTVAC20: yup.number().required(),
      mogsTerminalMTAIR20: yup.number().required(),
    })
  ),
});
