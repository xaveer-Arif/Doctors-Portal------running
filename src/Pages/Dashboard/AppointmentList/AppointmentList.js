import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

const AppointmentList = ({date}) => {
    const {user, token} = useAuth() 
    const [appointments, setAppointments] = useState([])
    console.log(user.email)
    const dated= date.toLocaleDateString()
    
    useEffect(() => {
      const url=`http://localhost:5000/appointment?email=${user.email}&date=${(dated)}`
      fetch(url,{
        headers:{
          "authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => setAppointments(data))
    },[date])
    console.log(appointments)
    
    return (
        <>
        <Grid container spacing={2}>
          <Grid item xs={6}>
        <h3 style={{textAlign:"start", marginLeft:"15px", color:"#14C5BF"}}>Appointments</h3>

          </Grid>
          <Grid item xs={6}>
          <h3 style={{textAlign:"end", marginLeft:"15px"}}>{date.toDateString()}</h3>
          </Grid>
        </Grid>
        {/* table start */}
        <TableContainer component={Paper}>
      <Table sx={{  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="right">Service Name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.serviceName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    );
};

export default AppointmentList;