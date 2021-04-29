import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Box } from '@material-ui/core';

import { useStyles } from './home-template.styles';

interface HomeTemplateProps {
    header: React.ReactElement;
    mobileMenu?: React.ReactElement;
    leftSection: React.ReactElement;
    rightSection: React.ReactElement;
    about: React.ReactElement;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ header, leftSection, rightSection, about }) => {
    const classes = useStyles();

    return (
        <Container disableGutters>
            <Box height="80rem">
                <Grid container alignItems="center" justify="space-between" component="header">
                    {header}
                </Grid>

                <Grid container direction="row" justify="space-between">
                    <Grid item>
                        <Box mt="15rem">{leftSection}</Box>
                    </Grid>
                    <Grid item>
                        <Box mt="5rem">{rightSection}</Box>
                    </Grid>
                </Grid>
            </Box>

            <Box height="100.47rem">{about}</Box>
        </Container>
    );
};

HomeTemplate.propTypes = {
    header: PropTypes.element.isRequired,
    leftSection: PropTypes.element.isRequired,
    rightSection: PropTypes.element.isRequired,
    about: PropTypes.element.isRequired,
};

export { HomeTemplate };
