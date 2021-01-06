import React from 'react';
import ReactDOM from 'react-dom';

import './sass/main.scss';
import { App } from 'components/App/app.component';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
