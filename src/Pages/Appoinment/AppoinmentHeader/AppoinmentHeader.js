import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import chair from "../../../images/chair.png"
import Calender from "../../Shared/Calender/Calender";

/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); */

const AppoinmentHeader = ({date, setDate}) => {
  return (
    <Container>
    
        <Grid container spacing={2}>
          <Grid item xs={12} md ={6}>
            <h1>Appoinment</h1>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={12} md ={6} >
          <img style={{width:"90%", paddingTop:"60px"}} src={chair} alt="" />
          </Grid>
        </Grid>
      
    </Container>
  );
};

export default AppoinmentHeader;
