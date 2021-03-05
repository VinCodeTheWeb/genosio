import React, { useContext } from 'react';
import { Drawer } from '@material-ui/core';

// AppContext
import { AppContext } from 'providers/app.provider';

const Menu: React.FC = () => {
    const { drawerState, toggleDrawerState } = useContext(AppContext) as AppContext;

    return (
        <Drawer open={drawerState} onClose={toggleDrawerState}>
            Menu
        </Drawer>
    );
};

export { Menu };
