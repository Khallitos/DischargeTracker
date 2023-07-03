import * as React from "react";
import { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import { Report } from "@mui/icons-material";
import { Button } from "@mui/material";

const dashboardDesign = {
  display: "flex",
  marginTop: "50px",
};

const dashboard = () => {
  const { isSideBarReduce, toggleSideBar,isCompleted,setIsCompleted } = useAppContext();
  const reduceSideBar = () => {
    toggleSideBar();
  };

  useEffect(()=>{
    setIsCompleted(false)
  })

  return (
    <Box sx={dashboardDesign}>
      <Box
        sx={{
          width: "300px",
          height: "100vh",
          backgroundColor: "white",
          marginLeft: "10px",
          display: isSideBarReduce ? "flex" : "none",
          flexDirection: "column",
          marginTop: "10px",
          padding: "10px",
        }}
      >
        {isSideBarReduce && (
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<AssessmentIcon />}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                color: "#3e5060",
              }}
            >
              Reports
            </Button>
          </Link>
        )}
        {isSideBarReduce && (
          <Link href="/add" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<AddIcon />}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                color: "#3e5060",
              }}
            >
              Add
            </Button>
          </Link>
        )}
        <Divider />
      </Box>
      <Box sx={{ width: "800px", marginLeft: "20px" }}>loremssssssssssss</Box>
    </Box>
  );
};

export default dashboard;
