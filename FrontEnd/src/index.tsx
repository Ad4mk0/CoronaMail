import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './designs/index.css';
import App from './App';
import { AppStateProvider } from './components/appState'



ReactDOM.render(

  <React.StrictMode>
    <AppStateProvider>
    <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

