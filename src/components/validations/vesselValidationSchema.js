import * as yup from "yup";

export const vesselValidationSchema = yup.object().shape({
vesselName: yup.string().required(),
productType: yup.string().required(),
receivingTerminal: yup.string().required(),
// vesselArrivalDate: yup.string().required(),
// vesselDepartureDate: yup.string().required(),
BillOfLading: yup.string().required(),
vesselGOV: yup.string().required(),
vesselDensity15: yup.string().required(),
vesselGSV: yup.string().required(),
vesselMetricTonesVAC: yup.string().required(),
vesselMetricTonesAIR: yup.string().required(),
linePacking: yup.string().required(),
})