import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './routes/Routes';
import routers from './routes/routes.data';

import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router routers={routers} />
  </React.StrictMode>
);
