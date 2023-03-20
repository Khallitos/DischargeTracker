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
  marginLeft: "5px",

  backgroundColor: "white",
};
const initialState = {
  MondayFood: "",
  MondayFoodPrice: "",
};


const food = () => {
  const [menu, setMenu] = useState({
    monday: [],
    tuesday: [],
  });
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitFoodMenu = () => {
    const newMenu =  {
      name : values.MondayFood,
      price: values.MondayFoodPrice
    }

   setMenu((prevMenu) => {
    const newMonday = [...prevMenu.monday, newMenu];
    return { ...prevMenu, monday: newMonday };
  });
}
  const dischargeFormBox = {
    width: "800px",
    marginLeft: {
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
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          padding: "10px",
        }}
      >
        <Divider />
      </Box>
      <Box sx={dischargeFormBox}>
        <Box sx={formDesign}>
          <Typography variant="h5" sx={dischargeHeader}>
            Food Menu
          </Typography>
          <Divider orientation="horizontal" />
          <Typography variant="h5">Monday</Typography>
          <TextField
            sx={formText}
            margin="normal"
            required
            fullWidth
            name="MondayFood"
            id="outlined-basic"
            label="food"
            variant="outlined"
            value={values.mondayMenu1}
            autoComplete="username"
            onChange={handleChange}
          />
          <TextField
            sx={formText}
            margin="normal"
            required
            fullWidth
            name="Price"
            id="outlined-basic"
            label="price"
            variant="outlined"
            value={values.mondayMenu1Price}
            autoComplete="username"
            onChange={handleChange}
          />

          <Divider orientation="horizontal" />
        </Box>
        <Button
          variant="text"
          color="primary"
          variant="contained"
          onClick={submitFoodMenu}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default food;
