import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';

// Assets
import Illustration from 'assets/illustration@2x.png';

// Header
import { Header } from 'components/Header/header.component';

// Styles
import { useStyles } from './home.styles';

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Container className={classes.container}>
                <Grid container direction="column" justify="center" md={6}>
                    <Typography variant="h1">From Idea</Typography>
                    <Typography variant="h1">To Production</Typography>
                    <Typography variant="h6">We are a bright team of designer & developer</Typography>
                </Grid>
                <Grid container direction="column" justify="center" md={6}>
                    <img src={Illustration} alt="illustration" />
                </Grid>
            </Container>
        </>
    );
};

export { HomePage };
