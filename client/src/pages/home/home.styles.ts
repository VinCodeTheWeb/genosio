import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Home type
import { IHome } from './home.type';

const styles = ({ breakpoints }: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            height: '800px',
            [breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
        },
        headingFirst: {
            fontSize: '6rem',
            fontWeight: 400,
        },
        headingSecond: {
            fontSize: '6rem',
            fontWeight: 900,
        },
        subheading: {
            fontSize: '2.5rem',
            color: '#707070',
        },
    });

export const useStyles = makeStyles(styles);
