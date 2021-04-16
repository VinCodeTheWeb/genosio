import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

interface HomeTemplateProps {
    header: React.ReactElement;
    mobileMenu: React.ReactElement;
    leftSection: React.ReactElement;
    rightSection: React.ReactElement;
    about: React.ReactElement;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ header, mobileMenu, leftSection, rightSection, about }) => {
    return (
        <div style={{ border: '1px solid red' }}>
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
                <Grid>{about}</Grid>
            </Container>
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
