import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

import { useStyles } from './home-template.styles';

interface HomeTemplateProps {
    header: React.ReactElement;
    mobileMenu?: React.ReactElement;
    leftSection?: React.ReactElement;
    rightSection?: React.ReactElement;
    about?: React.ReactElement;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ header, mobileMenu, leftSection, rightSection, about }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justify="space-between" component="header">
                {header}
            </Grid>
        </div>
    );
};

HomeTemplate.propTypes = {
    header: PropTypes.element.isRequired,
    mobileMenu: PropTypes.element.isRequired,
    leftSection: PropTypes.element.isRequired,
    rightSection: PropTypes.element.isRequired,
    about: PropTypes.element.isRequired,
};

export { HomeTemplate };
