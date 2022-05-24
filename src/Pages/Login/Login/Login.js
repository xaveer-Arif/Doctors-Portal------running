import { Alert, AlertTitle, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {loginUser, user, authError, signInWithGoogle, isLoading} = useAuth()
  const location = useLocation();
  const navigate =  useNavigate()
  
  const handleOnChange = (e) => {
    const value = e.target.value;
    const filed = e.target.name;
    const info = { ...loginData };
    info[filed] = value;
    console.log(info)
    setLoginData(info);
  };
console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, navigate)
    // console.log(loginData);
    alert();
  };

  const googleHandler = (location, navigate) => {
    signInWithGoogle(location, navigate)
    console.log('google')
  }
  
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ mt: 15 }} xs={12} md={6}>
      {isLoading &&  <CircularProgress color="success" />}
        {!isLoading && <form onSubmit={handleLogin}>
          <Typography variant="h5">Login</Typography>
          <TextField
            // required
            sx={{ width: "75%", m: 1 , mt:4}}
            id="standard-basic"
            variant="standard"
            label="Email"
            name="email"
            onBlur={handleOnChange}
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
            onBlur={handleOnChange}
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
          {
            user?.email && <Alert severity="success">
                              <AlertTitle>Sucessfully Login!</AlertTitle>
                            </Alert>
          }
          {
            authError && <Alert severity="success">
                             <AlertTitle>{authError}</AlertTitle>
                          </Alert>
          }
            <p>..............</p>
            <Button variant="contained" onClick={googleHandler}>Sign In With Google</Button>
        </form>}
      </Grid>

      <Grid item xs={12} md={6}>
        <img style={{ width: "86%" }} src={login} alt="" />
      </Grid>
    </Grid>
  );
};

export default Login;
