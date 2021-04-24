import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

import { useStyles } from './home-template.styles';

interface HomeTemplateProps {
    header: React.ReactElement;
    mobileMenu?: React.ReactElement;
    leftSection: React.ReactElement;
    rightSection: React.ReactElement;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ header, leftSection, rightSection }) => {
    const classes = useStyles();

    return (
        <Container disableGutters>
            <Grid container alignItems="center" justify="space-between" component="header">
                {header}
            </Grid>

            <Grid container direction="row" alignItems="center" justify="space-between">
                <Grid item>{leftSection}</Grid>
                <Grid item>{rightSection}</Grid>
            </Grid>
        </Container>
    );
};

HomeTemplate.propTypes = {
    header: PropTypes.element.isRequired,
    leftSection: PropTypes.element.isRequired,
    rightSection: PropTypes.element.isRequired,
};

export { HomeTemplate };
