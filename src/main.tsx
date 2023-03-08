import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App';
import { styles } from './index.style';
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={styles} />
    <App />
  </React.StrictMode>
);
