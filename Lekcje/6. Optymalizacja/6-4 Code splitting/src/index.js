import './main.scss';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import App from './components/App'

const container = document.getElementById('app');
const root = createRoot(container);

const render = (Comp) => {
  root.render(
    <AppContainer>
    <Comp />
    </AppContainer>,
    
  )
}

render(App);

if(module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  })
}



module.hot.accept();
