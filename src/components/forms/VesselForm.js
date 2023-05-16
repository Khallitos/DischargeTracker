import React, { useState } from "react";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useAppContext } from "../../context/AppContext";
import { AccountCircle, Height, Report, Terminal } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "@mui/material/Checkbox";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  TextField,
  Typography,
} from "@mui/material";
import { vesselValidationSchema } from "../validations/vesselValidationSchema";
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
    vesselData,
    setVesselData,
    isSideBarReduce,
    toggleSideBar,
    showAlert,
    parcel,
    parcelType,
  } = useAppContext();

  const [isBillofLading, setIsBillofLading] = useState(true);

  const BillCheckBox = () => {
    setIsBillofLading(!isBillofLading);
    setVesselData({ ...vesselData, BillOfLading: "N/A" });
  };

  const VesselValidation = async (e) => {
    
    let vesselFormData = {
      
      vesselName: vesselData["vesselName"],
      productType: vesselData["productType"],
      vesselArrivalDate: vesselData["vesselArrivalDate"],
      vesselDepartureDate: vesselData["vesselDepartureDate"],
      BillOfLading: vesselData["BillOfLading"],
      vesselGOV: vesselData["vesselGOV"],
      vesselDensity15: vesselData["vesselDensity15"],
      vesselGSV: vesselData["vesselGSV"],
      vesselMetricTonesVAC: vesselData["vesselMetricTonesVAC"],
      vesselMetricTonesAIR: vesselData["vesselMetricTonesAIR"],
      linePacking: vesselData["linePacking"],
    };

    let parcelChecker = parcel.parcelType;
    {
      parcelChecker === "Double"
        ? setStep(2)
        : parcelChecker === "Single"
        ? setStep(3)
        : setStep(2);
    }
    // const isValid = await vesselValidationSchema.isValid(vesselFormData);
    // console.log(isValid);
    // if (isValid) {
    //   setStep(2);
    // } else {
    //   toast.error("Please fill the data with valid credentials", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
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
        value={vesselData["vesselName"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, vesselName: e.target.value })
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
          value={vesselData["productType"]}
          displayEmpty
          name="productType"
          label="Product Type"
          onChange={(e) =>
            setVesselData({ ...vesselData, productType: e.target.value })
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

      {/* ************************************************************************* VESSEL ARRIVAL ***************************************************************************** */}
      <Typography variant="p">
        Vessel Arrival Date
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>

      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="vesselArrivalDate"
        id="vesselArrivalDate"
        label="Vessel Arrival Date"
        variant="outlined"
        type="date" // set type to "date"
        InputLabelProps={{ shrink: true }} // to shrink the label when the input is not empty
        value={vesselData["vesselArrivalDate"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, vesselArrivalDate: e.target.value })
        }
      />
      {/* *************************************************************************VESSEL DEPARTURE***************************************************************************** */}

      <Typography variant="p">
        Vessel Departure Date
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>

      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="vesselDepartureDate"
        id="vesselDepartureDate"
        label="Vessel Departure Date"
        variant="outlined"
        type="date" // set type to "date"
        InputLabelProps={{ shrink: true }} // to shrink the label when the input is not empty
        value={vesselData["vesselDepartureDate"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, vesselDepartureDate: e.target.value })
        }
      />
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
            value={vesselData["BillOfLading"]}
            onChange={(e) =>
              setVesselData({ ...vesselData, BillOfLading: e.target.value })
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
        value={vesselData["vesselGOV"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, vesselGOV: e.target.value })
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
        value={vesselData["vesselDensity15"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, vesselDensity15: e.target.value })
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
        value={vesselData["vesselGSV"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, vesselGSV: e.target.value })
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
        name="vesselMetricTonesVAC"
        id="outlined-basic"
        label="MT(VAC)"
        variant="outlined"
        value={vesselData["vesselMetricTonesVAC"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, vesselMetricTonesVAC: e.target.value })
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
        name="vesselMetricTonesAIR"
        id="outlined-basic"
        label="MT(AIR)"
        variant="outlined"
        value={vesselData["vesselMetricTonesAIR"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, vesselMetricTonesAIR: e.target.value })
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
        value={vesselData["linePacking"]}
        onChange={(e) =>
          setVesselData({ ...vesselData, linePacking: e.target.value })
        }
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={VesselValidation}>Next</Button>
      </Box>
    </Box>
  );
};

export default VesselForm;
