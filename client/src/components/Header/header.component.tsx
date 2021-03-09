import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, IconButton, Hidden, Box } from '@material-ui/core/';
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
        <AppBar data-testid="header" className={classes.header} position="static">
            <Toolbar className={classes.wrapper}>
                <Box>
                    <img className={classes.logo} src={Logo} alt="logo" />
                </Box>
                <Hidden mdDown>
                    <nav className={classes.nav}>
                        <Typography className={classes.link} component="li">
                            {t('home')}
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
