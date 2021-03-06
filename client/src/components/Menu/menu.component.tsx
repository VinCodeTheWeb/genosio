import React, { useContext } from 'react';
import { Drawer, ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// AppContext
import { AppContext } from 'providers/app.provider';

// Styles
import { useStyles } from './menu.styles';

const Menu: React.FC = () => {
    const classes = useStyles();
    const { drawer, toggleDrawer } = useContext(AppContext) as TAppContext;

    return (
        <Drawer open={drawer} onClose={toggleDrawer}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export { Menu };
