import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
  OutlinedInput,
} from "@mui/material/";
import {
  PersonIcon,
  AccountCircleIcon,
  AccountCircle,
  VisibilityOff,
  Visibility,
} from "@mui/icons-material/";
import LockIcon from "@mui/icons-material/Lock";
import { useAppContext } from "../context/AppContext";
import { Alert } from "../components";
import Link from "next/link";
import { useRouter } from "next/router";
// import {Link} from "react-router-dom"
// import { useNavigate } from "react-router-dom";

const RegisterBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: {
    lg: "center",
    xs: "",
  },
  justifyContent: "center",
  paddingX: "2px",
  marginX: {
    lg: "25%",
    md: "25%",
    xl: "25%",
    sm: "20",
    xs: "auto",
  },
  marginTop: {
    lg: "10%",
    md: "10%",
    xl: "10%",
    sm: "30%",
    xs: "30%",
  },
  width: {
    sm: "400px",
    lg: "600px",
    xl: "800px",
  },
};

//textfield
const formText = {
  fontSize: "100px",
  width: "300px",
  textColor: "white",

  backgroundColor: "white",
};

//
const FormOuterCover = {};

//
const formDesign = {
  borderRadius: "10px solid #1976d2 !important",
  borderTop: "3px solid #24b4eb",
  margin: "auto",
  padding: "20px",
  color: "black",
  backgroundColor: "#fff",
};

//login button
const loginbutton = {
  width: "300px",
  marginTop: "10px",
  fontWeight: "bold",
  backgroundColor: "#1c2c54",
  color: "white",

  "&:hover": {
    backgroundColor: "#24b4eb ",
    color: "white",
  },
};

//
const LoginText = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "5px",
};

// state for form

const initialState = {
  username: "",
  password: "",
};

export default function login() {
  //   const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [values, setValues] = useState(initialState);
  const { showAlert, loginUser, EmptyErr } = useAppContext();
  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const logUser = (e) => {
    e.preventDefault();
    const { username, password } = values;
    if (!username || !password) {
      return EmptyErr();
    }

    const userDetails = { username, password };
    loginUser({ userDetails, alertText: "login successful" });
  };
  return (
    <Box sx={RegisterBox}>
      <Box sx={formDesign}>
        <form>
          <Typography variant="h4" sx={LoginText}>
            Login
          </Typography>
          {showAlert && <Alert />}

          {/* username */}
          <Box>
            <TextField
              sx={formText}
              margin="normal"
              required
              fullWidth
              name="username"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={values.username}
              autoComplete="username"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* password */}

          <Box>
            <TextField
              sx={formText}
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              value={values.password}
              autoComplete="password"
              // autoFocus
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      cursor="pointer"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Button variant="contained" onClick={logUser} sx={loginbutton}>
              Login
            </Button>
          </Box>
        </form>
        <Box
          sx={{
            marginBottom: "5px",
            a: {
              color: "#fdebc8",
              fontWeight: "bold",
            },
          }}
        ></Box>
        <Divider orientation="horizontal" />
        <Divider orientation="horizontal" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            a: {
              color: "#24b4eb",
              fontWeight: "bold",
              marginTop: "10px",
            },
          }}
        >
          <Link href="/forgotpassword" sx={{ marginTop: "20px" }}>
            Forgot password
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
