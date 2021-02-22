import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';
// Logo
import Logo from 'assets/logo.png';

// Header Styles
import { styles } from './header.styles';

const useStyles = makeStyles(styles);

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header} position="static">
            <Toolbar className={classes.wrapper}>
                <Link to="/">
                    <img className={classes.logo} src={Logo} alt="logo" />
                </Link>
                <nav className={classes.nav}>
                    <Typography className={classes.link} component="li">
                        Home
                    </Typography>
                    <Typography className={classes.link} component="li">
                        About us
                    </Typography>
                    <Typography className={classes.link} component="li">
                        Services
                    </Typography>
                    <Typography className={classes.link} component="li">
                        Contact
                    </Typography>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export { Header };
