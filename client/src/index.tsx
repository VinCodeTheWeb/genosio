import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './i18n/config';

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
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </ThemeProvider>,
    document.getElementById('root'),
);
