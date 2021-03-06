import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { subscribeUser } from './subscription';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

serviceWorker.register();

subscribeUser();