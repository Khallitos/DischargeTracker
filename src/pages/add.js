import * as React from "react";
import { useState } from "react";
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
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import { AccountCircle, Report } from "@mui/icons-material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
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
  vesselName: "",
  productType: "",
  receivingTerminal: "",
  arrivalDate: ""
};


const add = () => {
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const { isSideBarReduce, toggleSideBar, showAlert } = useAppContext();
  
  const [arrivalDate, setArrivalDate] = React.useState(dayjs(''));
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
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const reduceSideBar = () => {
    toggleSideBar();
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

          {values.parcelType === "Single" ? (
             <Box sx={{ width: '100%' }}>
             <Stepper nonLinear activeStep={activeStep}>
               {steps.map((label, index) => (
                 <Step key={label} completed={completed[index]}>
                   <StepButton color="inherit" onClick={handleStep(index)}>
                     {label}
                   </StepButton>
                 </Step>
               ))}
             </Stepper>
             <div>
               {allStepsCompleted() ? (
                 <React.Fragment>
                   <Typography sx={{ mt: 2, mb: 1 }}>
                     All steps completed - you&apos;re finished
                   </Typography>
                   <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                     <Box sx={{ flex: '1 1 auto' }} />
                     <Button onClick={handleReset}>Reset</Button>
                   </Box>
                 </React.Fragment>
               ) : (
                 <React.Fragment>
                   <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                     Step {activeStep + 1}
                   </Typography>
                   <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                     <Button
                       color="inherit"
                       disabled={activeStep === 0}
                       onClick={handleBack}
                       sx={{ mr: 1 }}
                     >
                       Back
                     </Button>
                     <Box sx={{ flex: '1 1 auto' }} />
                     <Button onClick={handleNext} sx={{ mr: 1 }}>
                       Next
                     </Button>
                     {activeStep !== steps.length &&
                       (completed[activeStep] ? (
                         <Typography variant="caption" sx={{ display: 'inline-block' }}>
                           Step {activeStep + 1} already completed
                         </Typography>
                       ) : (
                         <Button onClick={handleComplete}>
                           {completedSteps() === totalSteps() - 1
                             ? 'Finish'
                             : 'Complete Step'}
                         </Button>
                       ))}
                   </Box>
                 </React.Fragment>
               )}
             </div>
           </Box>




            // <Box sx={{ display: "flex", flexDirection: "column" }}>
            //   <Divider orientation="horizontal" />

            //   <Typography variant="h6" sx={SingledischargeHeader}>
            //     Add Single Parcel Details
            //   </Typography>

            //   <Divider orientation="horizontal" />
            //   {/* NAME OF VESSEL */}
            //   <Typography variant="p">
            //     Name of Vessel
            //     <Typography
            //       component="span"
            //       sx={{ color: "red", marginBottom: "0px" }}
            //     >
            //       *
            //     </Typography>
            //   </Typography>

            //   <TextField
            //     sx={formText}
            //     margin="normal"
            //     required
            //     fullWidth
            //     name="vesselName"
            //     id="outlined-basic"
            //     label="Vessel Name"
            //     variant="outlined"
            //     value={values.vesselName}
            //     onChange={handleChange}
            //   />

            //   {/* TYPE OF PRODUCT */}
            //   <FormControl sx={{ width: "300px" }}>
            //     <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            //     <Typography variant="p">
            //       Type of Product
            //       <Typography component="span" sx={{ color: "red" }}>
            //         *
            //       </Typography>
            //     </Typography>
            //     <Select
            //       value={values.productType}
            //       onChange={handleChange}
            //       displayEmpty
            //       name="productType"
            //       label="Product Type"
            //     >
            //       <MenuItem value="">
            //         <em>None</em>
            //       </MenuItem>
            //       <MenuItem value="Gasoil">Gasoil</MenuItem>
            //       <MenuItem value="Gasoiline">Gasoline</MenuItem>
            //       <MenuItem value="Gasoiline">HFO</MenuItem>
            //       <MenuItem value="Bitumen">Bitumen</MenuItem>
            //     </Select>
            //   </FormControl>

            //   {/* RECEIVING TERMINAL */}
            //   <FormControl sx={{ width: "300px", marginTop: "10px" }}>
            //     <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            //     <Typography variant="p">
            //       Receiving Terminal
            //       <Typography component="span" sx={{ color: "red" }}>
            //         *
            //       </Typography>
            //     </Typography>
            //     <Select
            //       value={values.receivingTerminal}
            //       onChange={handleChange}
            //       displayEmpty
            //       name="receivingTerminal"
            //       label="Receiving Terminal"
            //     >
            //       <MenuItem value="">
            //         <em>None</em>
            //       </MenuItem>
            //       <MenuItem value="ZEN TERMINALS">ZEN TERMINALS</MenuItem>
            //       <MenuItem value="GHANSTOCK">GHANSTOCK</MenuItem>
            //       <MenuItem value="BLUEOCEAN">BLUEOCEAN</MenuItem>
            //       <MenuItem value="VIVO ENERGY">VIVO ENERGY</MenuItem>
            //       <MenuItem value="TOTAL ENERGY">TOTAL ENERGY</MenuItem>
            //     </Select>
            //   </FormControl>

            //   {/* ARRIVAL DATE */}
            //   <Typography variant="p">
            //       Vessel Arrival Date
            //       <Typography component="span" sx={{ color: "red" }}>
            //         *
            //       </Typography>
            //     </Typography>
            //   <LocalizationProvider dateAdapter={AdapterDayjs} >
            //       <DatePicker
            //       sx={{width:"300px"}}
            //         value={arrivalDate}
            //         name="arrivalDate"
            //         onChange={(newValue) => setArrivalDate(newValue)}
            //       />
            //   </LocalizationProvider>

            //   <TextField
            //     sx={formText}
            //     margin="normal"
            //     required
            //     fullWidth
            //     name="username"
            //     id="outlined-basic"
            //     label="Username"
            //     variant="outlined"
            //     value={values.username}
            //     autoComplete="username"
            //     onChange={handleChange}
            //     InputProps={{
            //       startAdornment: (
            //         <InputAdornment position="start">
            //           <AccountCircle />
            //         </InputAdornment>
            //       ),
            //     }}
            //   />
            // </Box>
          ) : (
            <Box></Box>
          )}

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
