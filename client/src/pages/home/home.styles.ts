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
        aboutText: {
            textTransform: 'uppercase',
            fontSize: '.8rem',
            '&::before': {
                content: '"ABOUT ME"',
                color: '#0FBF61',
                backgroundColor: '#0FBF61',
                borderRadius: '.5rem',
                opacity: '.1',
                height: '.8rem',
                width: '5rem',
                position: 'absolute',
                top: '.5rem',
                left: '.5rem',
            },
        },
        aboutParaText: {
            fontSize: '1.8rem',
        },
        hiringText: {
            fontSize: '2.1rem',
            fontWeight: 700,
        },
        btnContact: {
            width: '16.3rem',
            height: '5.2rem',
            borderRadius: 5,
            textTransform: 'none',
            marginTop: '5rem',
        },
        servicesText: {
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: '2rem',
            '&::before': {
                content: '" "',
                color: '#0FBF61',
                textAlign: 'center',
                backgroundColor: '#0FBF61',
                borderRadius: '1.5rem',
                opacity: '.1',
                height: '1.7rem',
                width: '12.8rem',
                position: 'absolute',
                top: '.5rem',
                left: '7rem',
            },
        },
    });

export const useStyles = makeStyles(styles);
