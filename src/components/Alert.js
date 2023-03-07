import { Box } from "@mui/material";
import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Alert() {
  const { alertType, alertText } = useAppContext();
  return <Box className={`alert ${alertType}`}> {alertText}</Box>;
}
