import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography, IconButton, Hidden } from '@material-ui/core/';
import { Menu } from '@material-ui/icons';

// Components
import { Logo } from 'components/@genosio-ui/Logo/logo.component';

// AppContext
import { AppContext } from 'providers/app.provider';

// Header Styles
import { useStyles } from './header.styles';

const Header: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation('components/header');

    const { toggleDrawer } = useContext(AppContext) as TAppContext;

    return (
        <>
            <Logo />
            <Hidden mdDown>
                <Grid component="nav">
                    <Box display="inline-block">
                        <Typography component="li" className={classes.link}>
                            {t('home')}
                        </Typography>
                    </Box>
                    <Box display="inline-block">
                        <Typography component="li" className={classes.link}>
                            {t('about')}
                        </Typography>
                    </Box>
                    <Box display="inline-block">
                        <Typography component="li" className={classes.link}>
                            {t('services')}
                        </Typography>
                    </Box>
                    <Box display="inline-block">
                        <Typography component="li" className={classes.link}>
                            {t('contact')}
                        </Typography>
                    </Box>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <IconButton role="presentation" onClick={toggleDrawer} aria-label="menu" component="span">
                    <Menu />
                </IconButton>
            </Hidden>
        </>
    );
};

export { Header };
