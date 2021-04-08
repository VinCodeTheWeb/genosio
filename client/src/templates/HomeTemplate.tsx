import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

import Illustration from 'assets/illustration.png';

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
                    <img src={Illustration} alt="illustration" />
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
