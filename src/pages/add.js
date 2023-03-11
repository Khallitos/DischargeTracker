import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Container from "@mui/material/Container";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import { useAppContext } from "../context/AppContext";
import { AccountCircle, Report, Terminal } from "@mui/icons-material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReceivingForm from "../components/ReceivingForm";
import VesselForm from "../components/VesselForm";
import MogsForm from "../components/MogsForm";

import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  StepLabel,
  TextField,
  Typography,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import FileCopyIcon from "@mui/icons-material/FileCopy";

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
const initialState = {
  parcelType: "",
};

const steps = [
  "Vessel Details",
  "Receiving Terminal Details",
  "Marshall Terminal Details",
];

const theme = createTheme();

function getStepContent(step) {
  switch (step) {
    case 0:
      return <VesselForm />;
    case 1:
      return <ReceivingForm />;
    case 2:
      return <MogsForm />;
    default:
      throw new Error("Unknown step");
  }
}
const add = () => {
  const [values, setValues] = useState(initialState);
  const { isSideBarReduce, toggleSideBar, showAlert,currentStep } = useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return  <VesselForm/>

      case 2:
        return <ReceivingForm />;

      case 3:
        return <MogsForm />;

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
      <Box sx={dischargeFormBox}>
        <Box sx={formDesign}>
          <Typography variant="h5" sx={dischargeHeader}>
            Add Discharge Details
          </Typography>
          <Divider orientation="horizontal" />
          {/* <Box sx={{ display: "flex" }}>
            <Box>
              <Button
                startIcon={<ArticleIcon />}
                variant="contained"
                sx={{ marginRight: "10px", backgroundColor: "#1c2c54" }}
              >
                Single Parcel
              </Button>
            </Box>
            <Box>
              <Button
                startIcon={<FileCopyIcon />}
                variant="contained"
                sx={{ backgroundColor: "#24b4eb" }}
              >
                Double Parcel
              </Button>
            </Box>
          </Box> */}
          {/* *******************************************************************************PARCEL TYPE *********************************************************************** */}
          {/* Parcel  Type */}
          <FormControl sx={{ width: "300px" }}>
            <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            <Typography variant="p">
              Please select parcel type
              <Typography component="span" sx={{ color: "red" }}>
                *
              </Typography>
            </Typography>
            <Select
              value={values.parcelType}
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
          {/* ******************************************************************************* SINGLE PARCEL *********************************************************************** */}
          {values.parcelType === "Single" ? (
            <Box sx={{ width: "100%", marginBottom: "20px" }}>
              <Typography variant="p" sx={SingledischargeHeader}>
                Add Single Parcel Details
              </Typography>
              <Stepper
                style={{ width: "100%" }}
                activeStep="1"
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
          {/* *******************************************************************************DOUBLE TYPE *********************************************************************** */}
          {values.parcelType === "Double" ? (
            <Box>
              <Divider orientation="horizontal" />
              <Typography variant="p" sx={SingledischargeHeader}>
                Add Double Parcel Details
              </Typography>
              <Divider orientation="horizontal" />

              <TextField
                sx={formText}
                margin="normal"
                required
                fullWidth
                name="username"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={values.username}
                autoComplete="username"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
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
