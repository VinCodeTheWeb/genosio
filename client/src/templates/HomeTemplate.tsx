import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

interface HomeTemplateProps {
    header: React.ReactElement;
    mobileMenu: React.ReactElement;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ header, mobileMenu }) => {
    return (
        <Container>
            {header}
            {mobileMenu}
            <Grid container>
                <Grid container item md={6} xs={12}>
                    1
                </Grid>
                <Grid container item md={6} xs={12}>
                    2
                </Grid>
            </Grid>
        </Container>
    );
};

HomeTemplate.propTypes = {
    header: PropTypes.element.isRequired,
    mobileMenu: PropTypes.element.isRequired,
};

export { HomeTemplate };
