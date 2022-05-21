import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const value = e.target.value;
    const filed = e.target.name;
    const info = { ...loginData };
    info[filed] = value;
    setLoginData(info);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    alert();
  };
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ mt: 15 }} xs={12} md={6}>
        <form onSubmit={handleLogin}>
          <Typography variant="h5">Login</Typography>
          <TextField
            // required
            sx={{ width: "75%", m: 1 , mt:4}}
            id="standard-basic"
            variant="standard"
            label="Email"
            name="email"
            onChange={handleOnChange}
            // type="email"
          ></TextField>
          <TextField
            // required
            sx={{ width: "75%", m: 2 }}
            id="standard-basic"
            variant="standard"
            label="Password"
            type="password"
            name="password"
            onChange={handleOnChange}
          ></TextField>
          <Button sx={{ width: "75%", m: 3 }} type="submit" variant="contained">
            Login
          </Button>
          {/* register */}
          <NavLink 
            style={{textDecoration:'none', display:"block", color:"blue", fontSize:"17px", margin:4}}
            to="/register">
              New User? Please Register
          </NavLink>
        </form>
      </Grid>

      <Grid item xs={12} md={6}>
        <img style={{ width: "86%" }} src={login} alt="" />
      </Grid>
    </Grid>
  );
};

export default Login;
