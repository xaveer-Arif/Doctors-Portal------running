import React from 'react';
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ModelBooking from "./ModalBooking/ModalBooking"

const Bookings = ({ schedule , date}) => {
  const [modelOpen, setModelOpen] = React.useState(false);
  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);
  

  return (
    <>
      <Grid item md={4} xs={12}>
        <Paper elevation={4} sx={{ py: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "regular", color: "#1bb5b0" }}
            gutterBottom
            component="div"
          >
            {schedule.name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {schedule.time}
          </Typography>
          <Typography variant="body1" sx={{ pb: 1 }} display="block">
            {schedule.space}
          </Typography>
          <Button 
          variant="contained"
          onClick={handleModelOpen}
          >
            Book Appointment</Button>
        </Paper>
      </Grid>
      <ModelBooking
        schedule ={schedule}
        modelOpen ={modelOpen}
        date = {date}
        handleModelClose = {handleModelClose}
      ></ModelBooking>

    </>
  );
};

export default Bookings;
