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

        link: {
            listStyleType: 'none',
            fontSize: '1.5rem',
            color: 'black',
            marginRight: '3.5rem',
            '&:hover': {
                cursor: 'pointer',
            },
        },
    });

export const useStyles = makeStyles(styles);
