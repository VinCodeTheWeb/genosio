import React from 'react';
import { Container } from '@material-ui/core';

interface HomeTemplateProps {
    header: React.ReactElement;
    mobileMenu: React.ReactElement;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ header, mobileMenu }) => {
    return (
        <Container>
            {header}
            {mobileMenu}
        </Container>
    );
};

export { HomeTemplate };
