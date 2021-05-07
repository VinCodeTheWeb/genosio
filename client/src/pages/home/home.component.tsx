import React from 'react';
import { Typography, Container, Grid, Box, Button, Hidden } from '@material-ui/core';

// Assets
import Illustration from 'assets/illustration@2x.png';
import People from 'assets/people.png';

// Components
import { Header } from 'components/@genosio-ui/Header/header.component';
import { Menu } from 'components/@genosio-ui/Menu/menu.component';

// HomeTemplate
import { HomeTemplate } from 'templates/HomeTemplate/home-template.component';
// Styles
import { useStyles } from './home.styles';

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <HomeTemplate
            header={<Header />}
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
            rightSection={
                <>
                    <img className={classes.illustration} src={Illustration} alt="illustration" />
                    <Hidden mdUp>
                        <Button className={classes.btnExplore} variant="contained" color="primary">
                            Explore More
                        </Button>
                    </Hidden>
                </>
            }
            aboutImg={People}
            aboutParagraph={
                <>
                    <Box position="relative">
                        <Typography className={classes.aboutText} color="primary">
                            About Me
                        </Typography>
                    </Box>

                    <Box>
                        <Typography className={classes.hiringText} variant="h6">
                            Why hiring us for your next project
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="subtitle1">
                            We are creative team from all over the world, working in web development and UI/UX. We enjoy
                            turning complex problems into simple, beautiful and intuitive designs.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="subtitle1">
                            Our job is to build your website so that it is functional and user-friendly but at the same
                            time attractive.
                        </Typography>
                    </Box>

                    <Button className={classes.btnContact} variant="contained" color="primary">
                        Contact us
                    </Button>
                </>
            }
            aboutCategories={<>Categories</>}
        />
    );
};

export default HomePage;
