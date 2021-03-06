import { Alert, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Bookings from "../Bookings/Bookings";

const AppoinmentAvailable = ({ date }) => {
  const [schedules, setSchedules] = useState([]);
  const [bookingSucessAlert, setBookingSucessAlert] = useState(false)

  useEffect(() => {
    fetch("./booking.json")
      .then((res) => res.json())
      .then((data) => {
        setSchedules(data);
      });
  }, []);

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ pb: 7, color: "#14C5BF", fontWeight: "500" }}
      >
        Available Appoinment {date.toDateString()}
      </Typography>
      {bookingSucessAlert && <Alert severity="success">Booking Successfull!</Alert> }

      <Grid container spacing={2}>
        {schedules?.map((schedule) => (
          <Bookings 
            key={schedule.id} 
            date = {date}
            setBookingSucessAlert = {setBookingSucessAlert}
            schedule={schedule}></Bookings>
        ))}
      </Grid>

    </Container>
  );
};

export default AppoinmentAvailable;
