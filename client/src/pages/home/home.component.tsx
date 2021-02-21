import React from 'react';
import { Typography, Container } from '@material-ui/core';

// Header
import { Header } from 'components/Header/header.component';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Typography variant="h1">Home Page</Typography>
            </Container>
        </>
    );
};

export { HomePage };
