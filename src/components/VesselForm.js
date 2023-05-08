import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useAppContext } from "../context/AppContext";
import { AccountCircle, Report, Terminal } from "@mui/icons-material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as yup from 'yup';
import { ToastContainer, toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";
import Checkbox from "@mui/material/Checkbox";
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
  marginTop: "10px",
  marginBottom: "20px",
  width: "300px",
  textColor: "white",

  backgroundColor: "white",
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const VesselForm = () => {
  const {
    setStep,
    cargoData,
    setCargoData,
    isSideBarReduce,
    toggleSideBar,
    showAlert,
  } = useAppContext();
  const [ArrivalDate, setArrivalDate] = React.useState(dayjs(""));
  const [DepartureDate, setDepartureDate] = React.useState(dayjs(""));
  const [isBillofLading, setIsBillofLading] = useState(true);
  // const [isError, setIsError] = useState(false)

  const vesselArrivalDate = (newValue) => {
    setArrivalDate(newValue);
    setCargoData({ ...cargoData, vesselArrivalDate: newValue });
  };

  const vesselDepartureDate = (newValue) => {
    setDepartureDate(newValue);
    setCargoData({ ...cargoData, vesselDepartureDate: newValue });
  };
  const BillCheckBox = () => {
    setIsBillofLading(!isBillofLading);
    setCargoData({ ...cargoData, BillOfLading: "N/A" });
  };

  const VesselValidation = async(e) => {

    let vesselFormData = {
      vesselName: cargoData["vesselName"],
      productType: cargoData["productType"],
      receivingTerminal: cargoData["receivingTerminal"],
      vesselArrivalDate: cargoData["vesselArrivalDate"],
      vesselDepartureDate: cargoData["vesselDepartureDate"],
      BillOfLading: cargoData["BillOfLading"],
      vesselGOV: cargoData["vesselGOV"],
      vesselDensity15: cargoData["vesselDensity15"],
      vesselGSV: cargoData["vesselGSV"],
      vesselMetricTonesVAC: cargoData["vesselMetricTonesVAC"],
      vesselMetricTonesAIR: cargoData["vesselMetricTonesAIR"],
      linePacking: cargoData["linePacking"],
    }
   
    console.log(vesselFormData)

    const isValid = await vesselSchema.isValid(vesselFormdata)
    console.log(isValid)
    if(isValid){
      setStep(2);
    }
    else{
      toast.error("Please fill the data with valid credentials", {
        position: toast.POSITION.TOP_RIGHT,
      });
    
  
  }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ToastContainer />
      {/* *************************************************************************NAME OF VESSEL***************************************************************************** */}
      <Typography
        variant="p"
        sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBotttom: "10px",
        }}
      >
        VESSEL DETAILS
      </Typography>
      <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />
      {/* {isError &&
      <Typography autoFocus variant="h6" sx={{marginTop:"10px", fontWeight:"bold",color:"red",  display:"flex",
          justifyContent: "center",
          alignItems: "center" }}>
      Please provide all details
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
} */}

      <Typography variant="p" sx={{ marginTop: "10px" }}>
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
        value={cargoData["vesselName"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, vesselName: e.target.value })
        }
      />

      {/* *************************************************************************TYPE OF PRODUCT***************************************************************************** */}
      <FormControl sx={{ width: "300px" }}>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Typography variant="p">
          Type of Product
          <Typography component="span" sx={{ color: "red" }}>
            *
          </Typography>
        </Typography>
        <Select
          value={cargoData["productType"]}
          displayEmpty
          name="productType"
          label="Product Type"
          onChange={(e) =>
            setCargoData({ ...cargoData, productType: e.target.value })
          }
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

      {/* *************************************************************************RECEIVING TERMINAL ***************************************************************************** */}
      <FormControl sx={{ width: "300px", marginTop: "10px" }}>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Typography variant="p">
          Receiving Terminal
          <Typography component="span" sx={{ color: "red" }}>
            *
          </Typography>
        </Typography>
        <Select
          value={cargoData["receivingTerminal"]}
          onChange={(e) =>
            setCargoData({ ...cargoData, receivingTerminal: e.target.value })
          }
          name="receivingTerminal"
          label="Receiving Terminal"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="ZEN TERMINALS">ZEN TERMINALS</MenuItem>
          <MenuItem value="GHANSTOCK">GHANSTOCK</MenuItem>
          <MenuItem value="BLUEOCEAN">BLUEOCEAN</MenuItem>
          <MenuItem value="VIVO ENERGY">VIVO ENERGY</MenuItem>
          <MenuItem value="TOTAL ENERGY">TOTAL ENERGY</MenuItem>
        </Select>
      </FormControl>

      {/* ************************************************************************* VESSEL ARRIVAL ***************************************************************************** */}
      <Typography variant="p">
        Vessel Arrival Date
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ width: "300px" }}
          value={cargoData["vesselArrivalDate"]}
          name="vesselArrivalDate"
          onChange={vesselArrivalDate}
        />
      </LocalizationProvider>
      {/* *************************************************************************VESSEL DEPARTURE***************************************************************************** */}
      <Typography variant="p">
        Vessel Departure Date
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ marginBottom: "20px" }}
      >
        <DatePicker
          sx={{ width: "300px" }}
          value={cargoData["vesselDepartureDate"]}
          name="vesselArrivalDate"
          onChange={vesselDepartureDate}
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

      {/* *************************************************************************BILL OF LADING***************************************************************************** */}

      <Typography variant="p" sx={{ marginTop: "30px" }}>
        <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />
        Bill Of Lading Quantity(VAC)
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      {isBillofLading && (
        <>
          <TextField
            sx={formText}
            margin="normal"
            required
            fullWidth
            name="BillOfLading"
            id="outlined-basic"
            label="Bill of Lading"
            variant="outlined"
            value={cargoData["BillOfLading"]}
            onChange={(e) =>
              setCargoData({ ...cargoData, BillOfLading: e.target.value })
            }
          />
        </>
      )}
      <Typography variant="p" color="initial">
        Check if not available
        <Checkbox
          {...label}
          onChange={BillCheckBox}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
      </Typography>
      <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />

      {/* *************************************************************************ARRIVAL FIGURES***************************************************************************** */}

      <Typography
        variant="p"
        sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        ARRIVAL FIGURES
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>

      <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />
      <Typography variant="p">
        GOV(CMB)
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="vesselGOV"
        id="outlined-basic"
        label="GOV"
        variant="outlined"
        value={cargoData["vesselGOV"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, vesselGOV: e.target.value })
        }
      />

      {/* *************************************************************************DENSITY @15 ***************************************************************************** */}
      <Typography variant="p">
        Density(@15)
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="vesselDensity15"
        id="outlined-basic"
        label="Density @15"
        variant="outlined"
        value={cargoData["vesselDensity15"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, vesselDensity15: e.target.value })
        }
      />

      {/* *************************************************************************MT(VAC) ***************************************************************************** */}
      <Typography variant="p">
        GSV(@15)
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="vesselGSV"
        id="outlined-basic"
        label="GSV @15"
        variant="outlined"
        value={cargoData["vesselGSV"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, vesselGSV: e.target.value })
        }
      />

      {/* *************************************************************************MT VAC ***************************************************************************** */}
      <Typography variant="p">
        MT(VAC)
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="vesselMTVAC"
        id="outlined-basic"
        label="MT(VAC)"
        variant="outlined"
        value={cargoData["vesselMTVAC"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, vesselMTVAC: e.target.value })
        }
      />

      {/* *************************************************************************MT AIR ***************************************************************************** */}
      <Typography variant="p">
        MT(AIR)
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="vesselMTAIR"
        id="outlined-basic"
        label="MT(AIR)"
        variant="outlined"
        value={cargoData["vesselMTAIR"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, vesselMTAIR: e.target.value })
        }
      />

      <Typography variant="p">
        LINE PACKING DIFF (CMB)
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="linePacking"
        id="outlined-basic"
        label="Line Packing Difference"
        variant="outlined"
        value={cargoData["linePacking"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, linePacking: e.target.value })
        }
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={VesselValidation}>Next</Button>
      </Box>
    </Box>
  );
};

export default VesselForm;
