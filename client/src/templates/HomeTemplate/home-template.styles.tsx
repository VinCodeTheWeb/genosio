import { makeStyles, createStyles } from '@material-ui/core/styles';

const styles = () =>
    createStyles({
        wrapper: {
            height: '80rem',
        },
    });

export const useStyles = makeStyles(styles);
