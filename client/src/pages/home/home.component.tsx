import React from 'react';
import { Typography, Container, Grid, Button } from '@material-ui/core';

// Assets
import Illustration from 'assets/illustration@2x.png';

// Header
import { Header } from 'components/Header/header.component';

// Menu
import { Menu } from 'components/Menu/menu.component';

// Styles
import { useStyles } from './home.styles';

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <Container>
            <Header />
            <Menu />
            <Container className={classes.container}>
                <Grid container direction="column" justify="center" md={6} sm={6} xs={12} item>
                    <Typography className={classes.headingFirst} variant="h1">
                        From Idea
                    </Typography>
                    <Typography className={classes.headingSecond} variant="h1">
                        To Production
                    </Typography>
                    <Typography className={classes.subheading} variant="h6">
                        We are a bright team of designer & developer
                    </Typography>
                    <Button variant="contained" color="primary">
                        Explore More
                    </Button>
                </Grid>
                <Grid container justify="flex-end" alignItems="center" md={6} sm={6} xs={12} item>
                    <img className={classes.illustration} src={Illustration} alt="illustration" />
                </Grid>
            </Container>
        </Container>
    );
};

export { HomePage };
