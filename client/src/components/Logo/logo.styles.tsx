import { Theme, createStyles, makeStyles } from '@material-ui/core';

export const styles = ({ breakpoints }: Theme) =>
    createStyles({
        logo: {
            height: '14rem',
            [breakpoints.down('sm')]: {
                position: 'relative',
                top: 0,
                left: '-2.5rem',
                height: '8rem',
            },
        },
    });

export const useStyles = makeStyles(styles);
