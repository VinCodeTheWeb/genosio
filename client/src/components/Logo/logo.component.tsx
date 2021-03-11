import React from 'react';
import { Box } from '@material-ui/core/';

// Logo Asset
import LogoImg from 'assets/logo.png';

// Logo Styles
import { useStyles } from './logo.styles';

const Logo: React.FC = () => {
    const classes = useStyles();

    return (
        <Box>
            <img className={classes.logo} src={LogoImg} alt="logo" />
        </Box>
    );
};

export { Logo };
