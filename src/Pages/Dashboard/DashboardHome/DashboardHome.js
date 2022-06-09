import * as React from "react";
import {  Grid } from "@mui/material";
import Calender from "../../Shared/Calender/Calender";
import AppointmentList from "../AppointmentList/AppointmentList";

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Calender key={date} date={date} setDate={setDate} />
            </Grid>
            <Grid item xs={12} md={7}>
              <AppointmentList date={date} />
            </Grid>
          </Grid>
        </div>
    );
};

export default DashboardHome;