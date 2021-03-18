import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core/';
import { Menu } from '@material-ui/icons';

// Components
import { Logo } from 'components/Logo/logo.component';

// AppContext
import { AppContext } from 'providers/app.provider';

// Header Styles
import { useStyles } from './header.styles';

const Header: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation('components/header');

    const { toggleDrawer } = useContext(AppContext) as TAppContext;

    return (
        <AppBar role="heading" className={classes.header} position="static">
            <Toolbar className={classes.wrapper}>
                <Logo />
                <Hidden mdDown>
                    <nav className={classes.nav}>
                        <Typography component="li" className={classes.link}>
                            {t('home')}
                        </Typography>
                        <Typography component="li" className={classes.link}>
                            {t('about')}
                        </Typography>
                        <Typography component="li" className={classes.link}>
                            {t('services')}
                        </Typography>
                        <Typography component="li" className={classes.link}>
                            {t('contact')}
                        </Typography>
                    </nav>
                </Hidden>
                <Hidden mdUp>
                    <IconButton role="presentation" onClick={toggleDrawer} aria-label="menu" component="span">
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export { Header };
