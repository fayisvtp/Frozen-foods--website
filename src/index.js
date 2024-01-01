import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = process.env.REACT_APP_CLIENT_ID

root.render(
  // <React.StrictMode>
   <GoogleOAuthProvider clientId={clientId}>
    <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
    
  /* </React.StrictMode> */
);


