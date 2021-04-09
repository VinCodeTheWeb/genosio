import React from 'react';
import { Typography, Container, Grid, Button, Hidden } from '@material-ui/core';

// Assets
import Illustration from 'assets/illustration@2x.png';

// Components
import { Header } from 'components/@genosio-ui/Header/header.component';
import { Menu } from 'components/@genosio-ui/Menu/menu.component';

// HomeTemplate
import { HomeTemplate } from 'templates/HomeTemplate';
// Styles
import { useStyles } from './home.styles';

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <HomeTemplate
            header={<Header />}
            mobileMenu={<Menu />}
            leftSection={
                <>
                    <Typography className={classes.headingFirst} variant="h1">
                        From Idea
                    </Typography>
                    <Typography className={classes.headingSecond} variant="h1">
                        To Production
                    </Typography>
                    <Typography className={classes.subheading} variant="h6">
                        We are a bright team of designer & developer
                    </Typography>
                    <Hidden mdDown>
                        <Button className={classes.btnExplore} variant="contained" color="primary">
                            Explore More
                        </Button>
                    </Hidden>
                </>
            }
        />
    );
};

export default HomePage;

/* <Container>
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
                    <Hidden mdDown>
                        <Button className={classes.btnExplore} variant="contained" color="primary">
                            Explore More
                        </Button>
                    </Hidden>
                </Grid>
                <Grid container justify="center" alignItems="center" md={6} sm={6} xs={12} item>
                    <Grid>
                        <img className={classes.illustration} src={Illustration} alt="illustration" />
                    </Grid>
                    <Grid>
                        <Hidden mdUp>
                            <Button className={classes.btnExplore} variant="contained" color="primary">
                                Explore More
                            </Button>
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>
        </Container> */
