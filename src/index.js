import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='718883851586-fovoee37kc4ff6mvh6ppkp6fk34fk12t.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


