import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const styles = ({ breakpoints }: Theme) =>
    createStyles({
        root: {
            width: '128.0rem',
            margin: '0 auto',
        },
    });

export const useStyles = makeStyles(styles);
