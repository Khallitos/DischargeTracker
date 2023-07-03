import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReceivingForm from "../components/forms/ReceivingFormComplete";
import VesselForm from "../components/forms/VesselForm";
import ReceivingFormDouble from "../components/forms/ReceivingFormDouble";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  StepLabel,
  TextField,
  Typography,
} from "@mui/material";

const dashboardDesign = {
  display: "flex",
  marginTop: "50px",
};

const loginbutton = {
  width: "300px",
  marginTop: "10px",
  fontWeight: "bold",
  backgroundColor: "#1c2c54",
  color: "white",

  "&:hover": {
    backgroundColor: "#24b4eb ",
    color: "white",
  },
};

const formDesign = {
  borderRadius: "10px solid #1976d2 !important",
  borderTop: "3px solid #24b4eb",
  margin: "auto",
  padding: "20px",
  color: "black",
  backgroundColor: "#fff",
};
const dischargeHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
};
const SingledischargeHeader = {
  display: "flex",
  marginBottom: "15px",
  marginTop: "30px",
};
//textfield
const formText = {
  fontSize: "100px",
  width: "300px",
  textColor: "white",

  backgroundColor: "white",
};


const steps = [
  "Vessel Details",
  "Receiving Terminal Details",
  "Marshall Terminal Details",
];

const theme = createTheme();

const add = () => {
  const {
    isSideBarReduce,
    currentStep,
    setStep,
    cargoData,
    setCargoData,
    setCargoData2,
    isloading,
    reverseLoading,
    parcelType,
    parcel,
    setParcel,
    setVesselData,
  } = useAppContext();

  const handleChange = (e) => {
    setParcel({ ...parcel, [e.target.name]: e.target.value });
  };



  const setReverseLoading = () => {
    reverseLoading();
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <VesselForm />;

      case 2:
        return <ReceivingFormDouble />;

      case 3:
        return <ReceivingForm />;
    }
  };

  const dischargeFormBox = {
    width: "800px",
    marginLeft: {
      xl: isSideBarReduce ? "5px" : "320px",
      lg: isSideBarReduce ? "5px" : "300px",
      xs: "5px",
      sm: "5px",
      md: "50px",
    },
    marginTop: "10px",

    p: {
      fontWeight: "bold",
    },
  };

  useEffect(() => {

    setCargoData([]);
    setStep(1);
    setReverseLoading();
    setVesselData({
      vesselName: "",
      productType: "",
      vesselArrivalDate: "",
      vesselDepartureDate: "",
      BillOfLading: "",
      vesselGOV: "",
      vesselDensity15: "",
      vesselGSV: "",
      vesselMetricTonesVAC: "",
      vesselMetricTonesAIR: "",
      linePacking: ""
    }),

      setCargoData({
        receivingTerminalGOV: "",
        receivingTerminal: "",
        receivingTerminalDensity: "",
        receivingTerminalWCF: "",
        receivingTerminalTemperature: "",
        receivingTerminalVCF: "",
        receivingTerminalGSV: "",
        receivingTerminalMTVAC: "",
        receivingTerminalMTAIR: "",
        receivingTerminalGSV20: "",
        receivingTerminalMTVAC20: "",
        receivingTerminalMTAIR20: "",
        mogsFlowmeterReading: "",
        mogsTerminalDensity20: "",
        mogsTerminalVCF: "",
        mogsTerminalGSV20: "",
        mogsTerminalMTVAC20: "",
        mogsTerminalMTAIR20: "",
      })

    setCargoData2({
      receivingTerminalGOV: "",
      receivingTerminal: "",
      receivingTerminalDensity: "",
      receivingTerminalWCF: "",
      receivingTerminalTemperature: "",
      receivingTerminalVCF: "",
      receivingTerminalGSV: "",
      receivingTerminalMTVAC: "",
      receivingTerminalMTAIR: "",
      receivingTerminalGSV20: "",
      receivingTerminalMTVAC20: "",
      receivingTerminalMTAIR20: "",
      mogsFlowmeterReading: "",
      mogsTerminalDensity20: "",
      mogsTerminalVCF: "",
      mogsTerminalGSV20: "",
      mogsTerminalMTVAC20: "",
      mogsTerminalMTAIR20: "",
    })

    

  }, [parcel.parcelType]);

  if (isloading)
    return (
      <CircularProgress
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );

  return (
    <Box sx={dashboardDesign}>
      <Box
        sx={{
          width: "300px",
          height: "100vh",
          backgroundColor: "white",
          marginLeft: "10px",
          display: isSideBarReduce ? "flex" : "none",
          flexDirection: "column",
          marginTop: "10px",
          padding: "10px",
        }}
      >
        {isSideBarReduce && (
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<AssessmentIcon />}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                color: "#3e5060",
              }}
            >
              Reports
            </Button>
          </Link>
        )}
        {isSideBarReduce && (
          <Link href="/add" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<AddIcon />}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                color: "#3e5060",
              }}
            >
              Add
            </Button>
          </Link>
        )}
        <Divider />
      </Box>
      {/* **********************************************MainSelector**************************************** */}
      <Box sx={dischargeFormBox}>
        <Box sx={formDesign}>
          <Typography variant="h5" sx={dischargeHeader}>
            Add Discharge Details
          </Typography>
          <Divider orientation="horizontal" />

          <FormControl sx={{ width: "300px" }}>
            <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            <Typography variant="p">
              Please select parcel type
              <Typography component="span" sx={{ color: "red" }}>
                *
              </Typography>
            </Typography>
            <Select
              value={parcelType}
              onChange={handleChange}
              displayEmpty
              name="parcelType"
              label="Parcel Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Double">Double</MenuItem>
            </Select>
          </FormControl>

          {parcel.parcelType === "Single" ? <Typography variant="p" sx={SingledischargeHeader}>
            Add Single Parcel details
          </Typography> : parcel.parcelType === "Double" ? <Typography variant="p" sx={SingledischargeHeader}>
            Add Double Parcel details
          </Typography> : parcel.parcelType === "Multi" ? <Typography variant="p" sx={SingledischargeHeader}>
            Add Multi Parcel details
          </Typography> : null}
          {/* ******************************************************************************* SINGLE PARCEL *********************************************************************** */}
          {parcel.parcelType === "Single" ? (
            <Box sx={{ width: "100%", marginBottom: "20px" }}>

              <Stepper
                style={{ width: "100%" }}
                activeStep={currentStep}
                orientation="horizontal"
              >
                <Step>
                  <StepLabel></StepLabel>
                </Step>

                <Step>
                  <StepLabel></StepLabel>
                </Step>

              </Stepper>
              {showStep(currentStep)}
            </Box>
          ) : (
            <Box></Box>
          )}
          {/* *******************************************************************************DOUBLE TYPE *********************************************************************** */}
          {parcel.parcelType === "Double" ? (
            <Box sx={{ width: "100%", marginBottom: "20px" }}>

              <Stepper
                style={{ width: "100%" }}
                activeStep={currentStep}
                orientation="horizontal"
              >
                <Step>
                  <StepLabel></StepLabel>
                </Step>

                <Step>
                  <StepLabel></StepLabel>
                </Step>

                <Step>
                  <StepLabel></StepLabel>
                </Step>
              </Stepper>
              {showStep(currentStep)}
            </Box>
          ) : (
            <Box></Box>
          )}

          <Divider orientation="horizontal" />
        </Box>
      </Box>
    </Box>
  );
};

export default add;
