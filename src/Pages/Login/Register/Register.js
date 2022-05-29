import { Button, Grid, TextField, Typography, CircularProgress, Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const [error, setError] = useState("");
    const {authError, user, register, isLoading} = useAuth()
    const navigate = useNavigate()

  const handleOnBlur = (e) => {
    const value = e.target.value;
    const filed = e.target.name;
    const info = { ...loginData };
    info[filed] = value;
    console.log(info)
    setLoginData(info);
  };

  // console.log(loginData.password1)
  const handleLogin = (e) => {
    e.preventDefault();
    if(loginData.password1 !== loginData.password2){
      return setError("password doesn`t match")
    }
    register(loginData.email , loginData.password1, loginData.name, loginData.phone, navigate)
    setError("")
    };
    return (
        <div>
            <Grid container spacing={2}>
      <Grid item sx={{ mt: 15 }} xs={12} md={6}>
        {isLoading &&  <CircularProgress color="success" />}
       {!isLoading && <form onSubmit={handleLogin}>
            
          <Typography variant="h5">Register</Typography>

            <TextField
                // required
                sx={{ width: "75%", m: 1, mt:4 }}
                id="standard-basic"
                variant="standard"
                label="Username"
                name="name"
                onBlur={handleOnBlur}
                // type="email"
            ></TextField>
            <TextField
                // required
                sx={{ width: "75%", m: 2 }}
                id="standard-basic"
                variant="standard"
                label="Email"
                name="email"
                onBlur={handleOnBlur}
                // type="email"
            ></TextField>

            <TextField
                // required
                sx={{ width: "75%", m: 2 }}
                id="standard-basic"
                variant="standard"
                label="Phone"
                name="phone"
                onBlur={handleOnBlur}
                type="number"
            ></TextField>

            <TextField
                // required
                sx={{ width: "75%", m: 2 }}
                id="standard-basic"
                variant="standard"
                label="Password"
                type="password"
                name="password1"
                onBlur={handleOnBlur}
            ></TextField>

            <TextField
                // required
                sx={{ width: "75%", m: 2 }}
                id="standard-basic"
                variant="standard"
                label="Confirm password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
            ></TextField>
          <h4>{error}</h4>
          <Button sx={{ width: "75%", m: 3 }} type="submit" variant="contained">
            Login
          </Button>

          {/* register */}
          <NavLink 
            style={{textDecoration:'none', display:"block", color:"blue", fontSize:"17px", margin:1}}
            to="/login">
              Already Registered? Please Login
          </NavLink>
          {/* {
            user?.email && <Alert severity="success">
                              <AlertTitle>Sucessfully Login!</AlertTitle>
                            </Alert>
          } */}
          {
            authError && <Alert severity="error">
                              <AlertTitle>{authError}</AlertTitle>
                          </Alert>
          }
        </form>}
      </Grid>

      <Grid item xs={12} md={6}>
        <img style={{ width: "86%" }} src={login} alt="" />
      </Grid>
    </Grid>
        </div>
    );
};

export default Register;