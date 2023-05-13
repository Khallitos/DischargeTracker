import * as yup from "yup";

export const vesselValidationSchema = yup.object().shape({
vesselName: yup.string().required(),
productType: yup.string().required(),
vesselArrivalDate: yup.date().required(),
vesselDepartureDate: yup.date().required(),
BillOfLading: yup.string().required(),
vesselGOV: yup.number().required(),
vesselDensity15: yup.number().required(),
vesselGSV: yup.number().required(),
vesselMetricTonesVAC: yup.number().required(),
vesselMetricTonesAIR: yup.number().required(),
linePacking: yup.number().required(),
})