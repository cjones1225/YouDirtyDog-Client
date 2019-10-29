import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App/App';
import {CustomerListProvider} from './contexts/CustomerListContext'
import {CustomerProvider} from './contexts/CustomerContext'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <CustomerListProvider>
      <CustomerProvider>
        <App />
      </CustomerProvider>
    </CustomerListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();