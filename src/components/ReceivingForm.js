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
const ReceivingForm = () => {
  const { setStep,userData,setUserData,isSideBarReduce, toggleSideBar, showAlert } = useAppContext();
  const [isError, setIsError] = useState(false)

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
    {/* *************************************************************************RECEIVING TERMINAL***************************************************************************** */}
    <Typography
      variant="p"
      sx={{
        marginTop: "30px",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBotttom:"10px"
      }}
    >
      RECEIVING TERMINAL DETAILS 
      
     
    </Typography>
    <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />
{isError &&
    <Typography autoFocus variant="h6" sx={{marginTop:"10px", fontWeight:"bold",color:"red",  display:"flex",
        justifyContent: "center",
        alignItems: "center" }}>
    Please provide all details
      <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
        *
      </Typography>
    </Typography>
}
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
        OUTURN @15
        <Typography component="span" sx={{ color: "red" }}>
          *
        </Typography>
      </Typography>
      <Divider variant="horizontal" sx={{ borderBottomWidth: "20px" }} />

      <Typography variant="p" sx={{marginTop:"10px"}}>
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
      name="receivingTerminalGov"
      id="outlined-basic"
      label="GOV"
      variant="outlined"
      value={userData["receivingTerminalGov"]}
      onChange={(e) =>
        setUserData({ ...userData, receivingTerminalGov: e.target.value })
      }
    />

<Typography variant="p" sx={{marginTop:"10px"}}>
      Density @15
      <Typography component="span" sx={{ color: "red", marginBottom: "0px" }}>
        *
      </Typography>
    </Typography>
  
   
    <TextField
      sx={formText}
      margin="normal"
      required
      fullWidth
      name="ReceivingTerminalDensity"
      id="outlined-basic"
      label="Density @15"
      variant="outlined"
      value={userData["ReceivingTerminalDensity"]}
      onChange={(e) =>
        setUserData({ ...userData, ReceivingTerminalDensity: e.target.value })
      }
    />

<Typography variant="p" sx={{marginTop:"10px"}}>
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
      name="WCF"
      id="outlined-basic"
      label="WCF"
      variant="outlined"
      value={userData["WCF"]}
      onChange={(e) =>
        setUserData({ ...userData, WCF: e.target.value })
      }
    />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}><Button onClick={()=>setStep(1)}>Back</Button>
        <Button onClick={()=>setStep(3)}>Next</Button></Box>
        
      
        </Box>
    
  )
}

export default ReceivingForm