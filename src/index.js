import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import {
  usersData,
  publicationsData,
  messagesData,
  dialogsData
} from './data.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App
        users={usersData}
        publications={publicationsData}
        messages={messagesData}
        dialogs={dialogsData}
      />
    </HashRouter>
  </React.StrictMode>
);
