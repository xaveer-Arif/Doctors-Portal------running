import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Bookings from '../Bookings/Bookings';


const AppoinmentAvailable = ({date}) => {
   const [schedules, setSchedules] = useState([])
    useEffect(() => {
        fetch("./booking.json")
        .then(res => res.json())
        .then(data =>setSchedules(data))
    },[])
    
    return (
        <Container>
            <h1>Available Appoinment {date.toDateString()}</h1>
            <Grid container spacing={2}>
                {
                    schedules.map(schedule => <Bookings 
                    key = {schedule.id}
                    schedule = {schedule}
                    ></Bookings>)
                    
                }
            </Grid>
     </Container>
    );
};

export default AppoinmentAvailable;