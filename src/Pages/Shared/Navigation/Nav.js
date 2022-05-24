import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth";




const Nav = () => {
  const {user, logOut} = useAuth()
   
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to ="/home"><Button sx={{color:"white"}}>Home</Button></Link>
          <Link to ="/appointment"><Button sx= {{color:"white"}}>Appointment</Button></Link>
          {
            user?.email ?
              <Button onClick={logOut} style={{color: "white"}}>LogOut</Button>
              :
              <NavLink to = "/login">
                <Button style={{color: "white"}}>logIn</Button>
              </NavLink>
          }
          {/* <Link to= "/login"><Button sx= {{color:"white"}}>Log In</Button></Link> */}
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Nav;