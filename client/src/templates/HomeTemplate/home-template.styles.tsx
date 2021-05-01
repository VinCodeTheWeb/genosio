import { makeStyles, createStyles } from '@material-ui/core/styles';

const styles = () =>
    createStyles({
        wrapper: {
            height: '80rem',
        },
        imgPeopleContainer: {
            paddingLeft: '8.7rem',
        },
        aboutParagraphContainer: {
            paddingLeft: '8.2rem',
        },
    });

export const useStyles = makeStyles(styles);
