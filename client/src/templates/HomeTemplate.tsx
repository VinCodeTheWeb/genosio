import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

interface HomeTemplateProps {
    header: React.ReactElement;
    mobileMenu: React.ReactElement;
    leftSection: React.ReactElement;
    rightSection: React.ReactElement;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ header, mobileMenu, leftSection, rightSection }) => {
    return (
        <Container>
            {header}
            {mobileMenu}
            <Grid container>
                <Grid container item direction="column" justify="center" md={6} sm={6} xs={12}>
                    {leftSection}
                </Grid>
                <Grid container item justify="center" alignItems="center" md={6} sm={6} xs={12}>
                    {rightSection}
                </Grid>
            </Grid>
        </Container>
    );
};

HomeTemplate.propTypes = {
    header: PropTypes.element.isRequired,
    mobileMenu: PropTypes.element.isRequired,
    leftSection: PropTypes.element.isRequired,
    rightSection: PropTypes.element.isRequired,
};

export { HomeTemplate };
