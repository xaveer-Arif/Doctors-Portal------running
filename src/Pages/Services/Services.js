import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SingleService from './SingleService/SingleService';
import Fluoride from "../../images/fluoride.png"
import Cavity from "../../images/cavity.png"
import Teath from "../../images/whitening.png"

const services = [
    {
        name: "Floride TreateMent",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam veritatis quasi",
        img: Fluoride
    },
    {
        name: "Cavity Filling",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam veritatis quasi",
        img: Cavity
    },
    {
        name: "Teath Whitning",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam veritatis quasi",
        img: Teath
    }

]

const Services = () => {
    return (
      <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map(service => <SingleService
                service = {service}
                ></SingleService>)}
            </Grid>
      </Box>
      </Container>
    );
};

export default Services;