import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useAppContext } from "../context/AppContext";
import { AccountCircle, Report, Terminal } from "@mui/icons-material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const formText = {
  fontSize: "100px",
  width: "300px",
  textColor: "white",

  backgroundColor: "white",
};

const initialState = {
  vesselName: "",
  productType: "",
  receivingTerminal: "",
  arrivalDate: "",
};

const VesselForm = () => {
  const [values, setValues] = useState(initialState);
  const { setStep,userData,setUserData,isSideBarReduce, toggleSideBar, showAlert } = useAppContext();
  const [arrivalDate, setArrivalDate] = React.useState(dayjs(""));

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const VesselValidation = (e) => {
  if(!userData["vesselName"]){
     return alert("enter vessel name")
  }
  setStep(2)
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* NAME OF VESSEL */}
      <Typography variant="p">
        Name of Vessel
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>

      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="vesselName"
        id="outlined-basic"
        label="Vessel Name"
        variant="outlined"
        value={userData["vesselName"]}
        onChange={(e)=>setUserData({...userData, "vesselName": e.target.value})}
      />

      {/* TYPE OF PRODUCT */}
      <FormControl sx={{ width: "300px" }}>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Typography variant="p">
          Type of Product
          <Typography component="span" sx={{ color: "red" }}>
            *
          </Typography>
        </Typography>
        <Select
          value={values.productType}
          onChange={handleChange}
          displayEmpty
          name="productType"
          label="Product Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Gasoil">Gasoil</MenuItem>
          <MenuItem value="Gasoiline">Gasoline</MenuItem>
          <MenuItem value="Gasoiline">HFO</MenuItem>
          <MenuItem value="Bitumen">Bitumen</MenuItem>
        </Select>
      </FormControl>

      {/* RECEIVING TERMINAL */}
      <FormControl sx={{ width: "300px", marginTop: "10px" }}>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Typography variant="p">
          Receiving Terminal
          <Typography component="span" sx={{ color: "red" }}>
            *
          </Typography>
        </Typography>
        <Select
          value={values.receivingTerminal}
          onChange={handleChange}
          displayEmpty
          name="receivingTerminal"
          label="Receiving Terminal"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="ZEN TERMINALS">ZEN TERMINALS</MenuItem>
          <MenuItem value="GHANSTOCK">GHANSTOCKs</MenuItem>
          <MenuItem value="BLUEOCEAN">BLUEOCEAN</MenuItem>
          <MenuItem value="VIVO ENERGY">VIVO ENERGY</MenuItem>
          <MenuItem value="TOTAL ENERGY">TOTAL ENERGY</MenuItem>
        </Select>
      </FormControl>

      {/* ARRIVAL DATE */}
      <Typography variant="p">
        Vessel Arrival Date
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ width: "300px" }}
          value={arrivalDate}
          name="arrivalDate"
          onChange={(newValue) => setArrivalDate(newValue)}
        />
      </LocalizationProvider>

      {/* <TextField
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
      /> */}
        <Box sx={{display:"flex",justifyContent:"flex-end"}}>
          
        <Button onClick={VesselValidation}>Next</Button>
        </Box>
     
    
    </Box>
  );
};

export default VesselForm;
