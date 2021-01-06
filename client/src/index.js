import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './sass/main.scss';

import { App } from 'components/App/app.component';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
