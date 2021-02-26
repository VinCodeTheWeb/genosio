import { makeStyles } from '@material-ui/core/styles';

// Home type
import { IHome } from './home.type';

const styles = (): IHome => ({
    container: {
        display: 'flex',
        height: '800px',
    },
});

export const useStyles = makeStyles(styles);
