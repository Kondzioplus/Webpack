import './main.scss';
import { AppContainer } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const render = (Comp) => {
  ReactDOM.render(
    <AppContainer>
    <Comp />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App);

if(module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  })
}

module.hot.accept();
