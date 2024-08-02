// import react
import React from 'react';
import ReactDOM from 'react-dom/client';

// import redux
import { Provider } from 'react-redux'
import store from './redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// import app component and global style sheets
import App from './App';
import './index.css';

// render
export const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);