import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useAppContext } from "../context/AppContext";

const formText = {
  fontSize: "100px",
  width: "300px",
  textColor: "white",

  backgroundColor: "white",
};

const MogsForm = () => {
  const { setStep,userData,setUserData,isSideBarReduce, toggleSideBar, showAlert } = useAppContext();
  return (
    <Box>
      MogsForm
      <Box sx={{display:"flex",justifyContent:"flex-end"}}>
      <TextField
        sx={formText}
        margin="normal"
        required
        fullWidth
        name="mogsTerminal"
        id="outlined-basic"
        label="mogsTerminal"
        variant="outlined"
        value={userData["mogsTerminal"]}
        onChange={(e)=>setUserData({...userData, "mogsTerminal": e.target.value})}
      />
        <Button onClick={() => setStep(2)}>Back</Button>
        <Button>Completed</Button>
      </Box>
    </Box>
  );
};

export default MogsForm;
