import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faDog} from '@fortawesome/free-solid-svg-icons'
import './index.css';
import App from './App/App';
import {CustomerListProvider} from './contexts/CustomerListContext'
import {CustomerProvider} from './contexts/CustomerContext'
import * as serviceWorker from './serviceWorker'

library.add(
  faDog, //logo
)

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