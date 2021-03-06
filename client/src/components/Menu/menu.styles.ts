import { createStyles, makeStyles } from '@material-ui/core';

const styles = () =>
    createStyles({
        menu: {
            border: '1px solid red',
        },
    });

export const useStyles = makeStyles(styles);
