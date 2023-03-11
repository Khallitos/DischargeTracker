import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import { useAppContext } from "../context/AppContext";
const formText = {
  fontSize: "100px",
  width: "300px",
  textColor: "white",

  backgroundColor: "white",
};

const ReceivingForm = () => {
  const { setStep,userData,setUserData,isSideBarReduce, toggleSideBar, showAlert } = useAppContext();

  return (
    <Box>ReceivingForm
        <Box sx={{display:"flex",justifyContent:"flex-end"}}>
        <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="receivingTerminal"
        id="outlined-basic"
        label="Receiving Terminal"
        variant="outlined"
        value={userData["receivingVessel"]}
        onChange={(e)=>setUserData({...userData, "receivingVessel": e.target.value})}
      />
        <Button onClick={()=>setStep(1)}>Back</Button>
        <Button onClick={()=>setStep(3)}>Next</Button>
      
        </Box>
    
    </Box>
  )
}

export default ReceivingForm