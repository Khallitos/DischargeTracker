import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const Cargo = () => {
  const vesselDetails = {
    vesselName: "MT santarino",
    Quanity: 1000,
  };

  const terminalDetails1 = {
    terminalArray: [
      {
        terminalName: "Zen",
        terminalQuantity: "2229",
      },
    ],
  };

  const terminalDetails2 = {
    terminalName: "Ghanstock",
    terminalQuantity: "2229",
  };

  const [cargoDetails, setCargoDetails] = useState(vesselDetails);

  const addTD1 = () => {
    setCargoDetails({
      ...cargoDetails,
      ...terminalDetails1,
    });
  };

  const addTD2 = () => {
    const newCargoArray = cargoDetails.terminalArray || []; // Retrieve the existing array or initialize as an empty array if it doesn't exist
    newCargoArray.push(terminalDetails2);
    setCargoDetails({
      ...cargoDetails,
      terminalArray: newCargoArray,
    });
  };

  console.log(cargoDetails);

  return (
    <Box sx={{ display: "flex", marginTop: "100px" }}>
      <Button variant="contained" color="primary" sx={{ mr: 5 }} onClick={addTD1}>
        Add TD1
      </Button>
      <Button variant="contained" color="primary" sx={{ mr: 5 }} onClick={addTD2}>
        Join TD2
      </Button>
      <Button variant="contained" color="primary" sx={{ mr: 5 }}>
        Show Array
      </Button>
    </Box>
  );
};

export default Cargo;
