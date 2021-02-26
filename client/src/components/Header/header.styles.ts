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
        height: '140px',
    },
    nav: {
        display: 'flex',
        [breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        listStyleType: 'none',
        fontSize: '15px',
        color: 'black',
        marginRight: '35px',
    },
});
