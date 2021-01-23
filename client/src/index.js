import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import './sass/main.scss';

import { App } from 'components/App/app.component';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
