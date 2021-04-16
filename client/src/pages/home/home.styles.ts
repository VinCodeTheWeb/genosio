import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const styles = ({ breakpoints }: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            height: '80rem',
            border: '1px solid red',
            [breakpoints.down('sm')]: {
                height: '0',
                flexDirection: 'column',
                justifyContent: 'space-between',
            },
        },
        headingFirst: {
            fontSize: '6rem',
            fontWeight: 400,
            [breakpoints.down('sm')]: {
                fontSize: '3rem',
            },
        },
        headingSecond: {
            fontSize: '6rem',
            fontWeight: 900,
            [breakpoints.down('sm')]: {
                fontSize: '3rem',
            },
        },
        subheading: {
            fontSize: '2.5rem',
            color: '#707070',
            [breakpoints.down('sm')]: {
                fontSize: '1.5rem',
            },
        },
        btnExplore: {
            width: '18.5rem',
            height: '5rem',
            borderRadius: 25,
            textTransform: 'none',
            marginTop: '5rem',
        },
        illustration: {
            width: '43rem',
            [breakpoints.down('sm')]: {
                width: '30rem',
            },
        },
    });

export const useStyles = makeStyles(styles);
