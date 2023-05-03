import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useAppContext } from "../context/AppContext";
import { ToastContainer, toast } from 'react-toastify';
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
  const mogsFormValidation  = () => {
    if (
      !cargoData["mogsFlowmeterReading"] ||
      !cargoData["mogsTerminalDensity20"] ||
      !cargoData["mogsTerminalVCF"] ||
      !cargoData["mogsTerminalGSV20"] ||
      !cargoData["mogsTerminalMTVAC20"] ||
      !cargoData["mogsTerminalMTAIR20"] 
    ) {
      toast.error("Please enter all MOGS Terminal details", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      addSingleCargoDetails({cargoData})
      // toast.success("Submitted Successfully", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    }
  };
  const {
    setStep,
    cargoData,
    setCargoData,
    isSideBarReduce,
    toggleSideBar,
    showAlert,
    addSingleCargoDetails
  } = useAppContext();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ToastContainer />
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
        value={cargoData["mogsFlowmeterReading"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, mogsFlowmeterReading: e.target.value })
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
        value={cargoData["mogsTerminalDensity20"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
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
        value={cargoData["mogsTerminalVCF"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
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
        value={cargoData["mogsTerminalGSV20"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
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
        value={cargoData["mogsTerminalMTVAC20"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
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
        value={cargoData["mogsTerminalMTAIR20"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
            mogsTerminalMTAIR20: e.target.value,
          })
        }
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button onClick={() => setStep(2)}>Back</Button>
        <Button onClick={mogsFormValidation}>Completed</Button>
      </Box>
    </Box>
  );
};

export default ReceivingForm;



