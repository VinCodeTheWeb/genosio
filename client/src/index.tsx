import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './i18n/config';

// CSS Base
import './styles/_base.css';

// App Theme
import { THEME } from 'theme/theme.config';

//  CssBaseLine For Global Reset
import CssBaseline from '@material-ui/core/CssBaseline';

// App Component
import { App } from 'components/App/app.component';

ReactDOM.render(
    <ThemeProvider theme={createMuiTheme(THEME)}>
        <CssBaseline />
        <React.Suspense fallback={<div>Loading...</div>}>
            <App />
        </React.Suspense>
    </ThemeProvider>,
    document.getElementById('root'),
);
