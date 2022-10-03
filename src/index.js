import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderThree = (state) => {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App state={state} store={store} />
      </HashRouter>
    </React.StrictMode>
  );
};


const state = store.getState();
renderThree(state);

store.subscribe(() => {
  renderThree(state);
});
