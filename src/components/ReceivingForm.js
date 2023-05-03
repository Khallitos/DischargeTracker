import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useAppContext } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
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
  const ReceivingFormValidation = () => {
    if (
      !cargoData["receivingTerminalGOV"] ||
      !cargoData["receivingTerminalDensity"] ||
      !cargoData["receivingTerminalWCF"] ||
      !cargoData["receivingTerminalTemperature"] ||
      !cargoData["receivingTerminalVCF"] ||
      !cargoData["receivingTerminalGSV"] ||
      !cargoData["receivingTerminalMTVAC"] ||
      !cargoData["receivingTerminalMTAIR"] ||
      !cargoData["receivingTerminalGSV20"] ||
      !cargoData["receivingTerminalMTVAC20"] ||
      !cargoData["receivingTerminalMTAIR20"]
    ) {
      toast.error("Please enter all Receiving Terminal details", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setStep(3);
    } else {
      setStep(3);
    }
  };
  const {
    setStep,
    cargoData,
    setCargoData,
    isSideBarReduce,
    toggleSideBar,
    showAlert,
  } = useAppContext();
  const [isError, setIsError] = useState(false);

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
        RECEIVING TERMINAL DETAILS
      </Typography>
      <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />
      {/* {isError && (
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
      )} */}
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
        OUTURN @15
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />

      {/* *************************************************************************GOV***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        GOV(CBM)
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>

      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="receivingTerminalGOV"
        id="outlined-basic"
        label="GOV"
        variant="outlined"
        value={cargoData["receivingTerminalGOV"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, receivingTerminalGOV: e.target.value })
        }
      />

      {/* *************************************************************************DENSITY***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        DENSITY @15
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>

      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="receivingTerminalDensity"
        id="outlined-basic"
        label="DENSITY @15"
        variant="outlined"
        value={cargoData["receivingTerminalDensity"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
            receivingTerminalDensity: e.target.value,
          })
        }
      />

      {/* *************************************************************************WCF***************************************************************************** */}

      <Typography variant="p" sx={{ marginTop: "10px" }}>
        WCF
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="receivingTerminalWCF"
        id="outlined-basic"
        label="WCF"
        variant="outlined"
        value={cargoData["receivingTerminalWCF"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, receivingTerminalWCF: e.target.value })
        }
      />

      {/* *************************************************************************AVERAGE TEMPERATURE***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        AVERAGE TEMPERATURE
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="receivingTerminalTemperature"
        id="outlined-basic"
        label="AVERAGE TEMPERATURE"
        variant="outlined"
        value={cargoData["receivingTerminalTemperature"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
            receivingTerminalTemperature: e.target.value,
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
        name="receivingTerminalVCF"
        id="outlined-basic"
        label="VCF"
        variant="outlined"
        value={cargoData["receivingTerminalVCF"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, receivingTerminalVCF: e.target.value })
        }
      />

      {/* *************************************************************************GSV @15***************************************************************************** */}
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
        name="receivingTerminalGSV"
        id="outlined-basic"
        label="GSV"
        variant="outlined"
        value={cargoData["receivingTerminalGSV"]}
        onChange={(e) =>
          setCargoData({ ...cargoData, receivingTerminalGSV: e.target.value })
        }
      />

      {/* *************************************************************************METRIC TONNES VAC***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        METRIC TONNES VAC
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="receivingTerminalMTVAC"
        id="outlined-basic"
        label="MT VAC"
        variant="outlined"
        value={cargoData["receivingTerminalMTVAC"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
            receivingTerminalMTVAC: e.target.value,
          })
        }
      />

      {/* *************************************************************************METRIC TONNES AIR***************************************************************************** */}
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
        name="receivingTerminalMTAIR"
        id="outlined-basic"
        label="MT AIR"
        variant="outlined"
        value={cargoData["receivingTerminalMTAIR"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
            receivingTerminalMTAIR: e.target.value,
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

      {/* *************************************************************************GSV @20***************************************************************************** */}
      <Typography variant="p" sx={{ marginTop: "10px" }}>
        GSV @20
        <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
          *
        </Typography>
      </Typography>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="receivingTerminalGSV20"
        id="outlined-basic"
        label="GSV "
        variant="outlined"
        value={cargoData["receivingTerminalGSV20"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
            receivingTerminalGSV20: e.target.value,
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
        name="receivingTerminalMTVAC20"
        id="outlined-basic"
        label="MT VAC "
        variant="outlined"
        value={cargoData["receivingTerminalMTVAC20"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
            receivingTerminalMTVAC20: e.target.value,
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
        name="receivingTerminalMTAIR20"
        id="outlined-basic"
        label="MT VAC "
        variant="outlined"
        value={cargoData["receivingTerminalMTAIR20"]}
        onChange={(e) =>
          setCargoData({
            ...cargoData,
            receivingTerminalMTAIR20: e.target.value,
          })
        }
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setStep(1)}>Back</Button>
        <Button onClick={ReceivingFormValidation}>Next</Button>
      </Box>
    </Box>
  );
};

export default ReceivingForm;
