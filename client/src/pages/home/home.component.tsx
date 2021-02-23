import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';

// Header
import { Header } from 'components/Header/header.component';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Grid alignItems="center">
                    <Typography variant="h1">From Idea</Typography>
                </Grid>
                <Grid>
                    <Typography variant="h1">To Production</Typography>
                </Grid>
                <Grid>
                    <Typography variant="h6">We are a bright team of designer & developer</Typography>
                </Grid>
            </Container>
        </>
    );
};

export { HomePage };
