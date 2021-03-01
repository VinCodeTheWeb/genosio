import { Theme } from '@material-ui/core';
import { IHeader } from './header.type';

export const styles = ({ breakpoints }: Theme): IHeader => ({
    header: {
        backgroundColor: 'white',
        boxShadow: 'none',
    },
    wrapper: {
        justifyContent: 'space-between',
    },
    logo: {
        height: '14rem',
        [breakpoints.down('sm')]: {
            height: '8rem',
        },
    },
    nav: {
        display: 'flex',
        [breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        listStyleType: 'none',
        fontSize: '1.5rem',
        color: 'black',
        marginRight: '3.5rem',
    },
});
