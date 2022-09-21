import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

import state, { subscribe } from './store/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderThree = () => {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App state={state}/>
      </HashRouter>
    </React.StrictMode>
  );
};

subscribe(renderThree);
renderThree();
