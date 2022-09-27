import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './store/store.js';
import initialState from './api/data.js';

store.setState(initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderThree = () => {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App store={store}/>
      </HashRouter>
    </React.StrictMode>
  );
};

store.subscribe(renderThree);
renderThree();
