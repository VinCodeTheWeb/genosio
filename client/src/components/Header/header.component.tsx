import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core/';
import { Menu } from '@material-ui/icons';

// AppContext
import { AppContext } from 'providers/app.provider';

// Logo
import Logo from 'assets/logo.png';

// Header Styles
import { useStyles } from './header.styles';

const Header: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation('components/header');

    const { toggleDrawer } = useContext(AppContext) as TAppContext;

    return (
        <AppBar data-test="header" className={classes.header} position="static">
            <Toolbar className={classes.wrapper}>
                <Link to="/">
                    <img className={classes.logo} src={Logo} alt="logo" />
                </Link>
                <Hidden mdDown>
                    <nav className={classes.nav}>
                        <Typography className={classes.link} component="li">
                            {t('header:home')}
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
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={toggleDrawer} aria-label="menu" component="span">
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export { Header };
