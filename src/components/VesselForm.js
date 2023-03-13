import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useAppContext } from "../context/AppContext";
import { AccountCircle, Report, Terminal } from "@mui/icons-material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
  marginBottom:"20px",
  width: "300px",
  textColor: "white",

  backgroundColor: "white",
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const VesselForm = () => {
  const {
    setStep,
    userData,
    setUserData,
    isSideBarReduce,
    toggleSideBar,
    showAlert,
  } = useAppContext();
  const [ArrivalDate, setArrivalDate] = React.useState(dayjs(""));
  const [DepartureDate, setDepartureDate] = React.useState(dayjs(""));
  const [isBillofLading, setIsBillofLading] = useState(true);

  const vesselArrivalDate = (newValue) => {
    setArrivalDate(newValue);
    setUserData({ ...userData, vesselArrivalDate: newValue });
  };

  const vesselDepartureDate = (newValue) => {
    setDepartureDate(newValue);
    setUserData({ ...userData, vesselDepartureDate: newValue });
  };
  const BillCheckBox = () => {
    setIsBillofLading(!isBillofLading);
    setUserData({ ...userData, BillOfLading: "N/A" });
  };

  const VesselValidation = (e) => {
    if (!userData["vesselName"]) {
      return alert("enter vessel name");
    }
    setStep(2);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* *************************************************************************NAME OF VESSEL***************************************************************************** */}
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
        onChange={(e) =>
          setUserData({ ...userData, vesselName: e.target.value })
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
          value={userData["productType"]}
          displayEmpty
          name="productType"
          label="Product Type"
          onChange={(e) =>
            setUserData({ ...userData, productType: e.target.value })
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
          value={userData["receivingTerminal"]}
          onChange={(e) =>
            setUserData({ ...userData, receivingTerminal: e.target.value })
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
          value= {userData["vesselArrivalDate"]}
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
          value={DepartureDate}
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
            value={userData["BillOfLading"]}
            onChange={(e) =>
              setUserData({ ...userData, BillOfLading: e.target.value })
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
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
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
        name="VesselGov"
        id="outlined-basic"
        label="Vessel Gov"
        variant="outlined"
        value={userData["VesselGov"]}
        onChange={(e) =>
          setUserData({ ...userData, VesselGov: e.target.value })
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
        name="VesselDensity15"
        id="outlined-basic"
        label="Density @15"
        variant="outlined"
        value={userData["VesselDensity15"]}
        onChange={(e) =>
          setUserData({ ...userData, VesselDensity15: e.target.value })
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
        name="VesselGsv"
        id="outlined-basic"
        label="GSV @15"
        variant="outlined"
        value={userData["VesselGsv"]}
        onChange={(e) =>
          setUserData({ ...userData, VesselGsv: e.target.value })
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
        name="vesselMetricTonesVac"
        id="outlined-basic"
        label="MT(VAC)"
        variant="outlined"
        value={userData["vesselMetricTonesVac"]}
        onChange={(e) =>
          setUserData({ ...userData, vesselMetricTonesVac: e.target.value })
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
        name="vesselMetricTonesAir"
        id="outlined-basic"
        label="MT(Air)"
        variant="outlined"
        value={userData["vesselMetricTonesAir"]}
        onChange={(e) =>
          setUserData({ ...userData, vesselMetricTonesAir: e.target.value })
        }
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={VesselValidation}>Next</Button>
      </Box>
    </Box>
  );
};

export default VesselForm;
