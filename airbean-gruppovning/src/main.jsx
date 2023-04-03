import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Allt man behöver för att använda redux store.
import reducer from './reducers/Reducertest';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

const store = legacy_createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Används för att få igång våran Redux devtools
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
)
