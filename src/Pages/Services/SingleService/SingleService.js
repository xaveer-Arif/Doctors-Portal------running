import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SingleService = (props) => {
  const { name, discription, img } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          style = {{width:"auto", height:"100px" , margin: "5px  auto"}}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleService;
