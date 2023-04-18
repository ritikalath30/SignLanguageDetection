import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Card, CardContent } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import please from "../images/please.jpg"
import sorry from "../images/sorry.jpg"
import howAreYou from "../images/how_are_you.png"
import good_morning from "../images/good_morning.gif"
import Paper from '@mui/material/Paper';


const cards = [
    { id: 1, img: sorry },
    { id: 2, img: please },
    { id: 3, img: howAreYou },
    { id: 4, img: good_morning },

];

const GridOfCards = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container  >
                {cards.map((card) => (
                    <Grid  key={card.id} >
                        <Card>
                            <CardMedia
                                component="img"
                                height='150'
                                image={card.img}
                                alt="Paella dish"
                            />
                        </Card>
                    </Grid>

                ))}
            </Grid>

            <Paper elevation={0} />
            <Paper />
            <Paper elevation={3} />
        </Box>
    );
};

export default GridOfCards;
