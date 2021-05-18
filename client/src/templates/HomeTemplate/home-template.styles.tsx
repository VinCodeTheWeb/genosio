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
            maxWidth: '32.3rem',
            marginLeft: '8.2rem',
            marginTop: '3.3rem',
        },
    });

export const useStyles = makeStyles(styles);
