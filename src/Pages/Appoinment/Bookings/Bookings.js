import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
const Bookings = ({ schedule }) => {
  console.log(schedule);

  return (
    <>
      <Grid item md={4} xs={12}>
        <Paper elevation={2} sx={{p:1}}>
          <h2>{schedule?.name}</h2>
          <h4>{schedule?.time}</h4>
          <h5>{schedule?.space}</h5>
        </Paper>
      </Grid>
    </>
  );
};

export default Bookings;
