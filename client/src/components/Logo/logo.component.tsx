import React from 'react';
import { Box } from '@material-ui/core/';

// Header Styles
import { useStyles } from './logo.styles';

// Logo
import LogoImg from 'assets/logo.png';

const Logo: React.FC = () => {
    const classes = useStyles();

    return (
        <Box>
            <img role="img" className={classes.logo} src={LogoImg} alt="logo" />
        </Box>
    );
};

export { Logo };
