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
  marginBottom: "20px",
  width: "300px",
  textColor: "white",

  backgroundColor: "white",
};
const ReceivingForm = () => {
  const {
    setStep,
    userData,
    setUserData,
    isSideBarReduce,
    toggleSideBar,
    showAlert,
  } = useAppContext();
  const [isError, setIsError] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* *************************************************************************RECEIVING TERMINAL***************************************************************************** */}
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
        MOGS TERMINAL DETAILS
      </Typography>
      <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />
      {isError && (
        <Typography
          autoFocus
          variant="h6"
          sx={{
            marginTop: "10px",
            fontWeight: "bold",
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Please provide all details
          <Typography
            component="span"
            sx={{ color: "red", marginBottom: "0px" }}
          >
            *
          </Typography>
        </Typography>
      )}
  


      {/* *************************************************************************Flow***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        FLOW METER READING
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="mogsFlowmeterReading"
        id="outlined-basic"
        label="Flow meter reading"
        variant="outlined"
        value={userData["mogsFlowmeterReading"]}
        onChange={(e) =>
          setUserData({ ...userData, mogsFlowmeterReading: e.target.value })
        }
      />

    
      {/* *************************************************************************GSV @20***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
      Density @20
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="mogsTerminalDensity20"
        id="outlined-basic"
        label="Density "
        variant="outlined"
        value={userData["mogsTerminalDensity20"]}
        onChange={(e) =>
          setUserData({
            ...userData,
            mogsTerminalDensity20: e.target.value,
          })
        }
      />

      

      {/* *************************************************************************VCF***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
      VCF
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="mogsTerminalVCF"
        id="outlined-basic"
        label="VCF"
        variant="outlined"
        value={userData["mogsTerminalVCF"]}
        onChange={(e) =>
          setUserData({
            ...userData,
            mogsTerminalVCF: e.target.value,
          })
        }
      />

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
        OUTURN @20
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />



     {/* *************************************************************************GSV ***************************************************************************** */}
     <Typography variant="p" sx={{ marginTop: "10px" }}>
      GSV 
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="mogsTerminalGSV20"
        id="outlined-basic"
        label="MT VAC "
        variant="outlined"
        value={userData["mogsTerminalGSV20"]}
        onChange={(e) =>
          setUserData({
            ...userData,
            mogsTerminalGSV20: e.target.value,
          })
        }
      />




      {/* *************************************************************************MT VAC***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
      MT VAC
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="mogsTerminalMTVAC20"
        id="outlined-basic"
        label="MT VAC "
        variant="outlined"
        value={userData["mogsTerminalMTVAC20"]}
        onChange={(e) =>
          setUserData({
            ...userData,
            mogsTerminalMTVAC20: e.target.value,
          })
        }
      />


      {/* *************************************************************************MT AIR***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
      MT AIR
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="mogsTerminalMTAIR20"
        id="outlined-basic"
        label="MT VAC "
        variant="outlined"
        value={userData["mogsTerminalMTAIR20"]}
        onChange={(e) =>
          setUserData({
            ...userData,
            mogsTerminalMTAIR20: e.target.value,
          })
        }
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button onClick={() => setStep(2)}>Back</Button>
        <Button>Completed</Button>
      </Box>
    </Box>
  );
};

export default ReceivingForm;



