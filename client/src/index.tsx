import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// CSS Base
import './styles/_base.css';
// App Theme
import { THEME } from 'styles/theme.styles';

//  CssBaseLine For Global Reset
import CssBaseline from '@material-ui/core/CssBaseline';

// App Component
import { App } from 'components/App/app.component';

ReactDOM.render(
    <ThemeProvider theme={createMuiTheme(THEME)}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
