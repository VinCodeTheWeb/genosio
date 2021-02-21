import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Logo
import Logo from 'assets/logo.png';

// Header Styles
import { styles } from './header.styles';

const useStyles = makeStyles(styles);

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <img className={classes.logo} src={Logo} alt="logo" />
            </Toolbar>
        </AppBar>
    );
};

export { Header };
