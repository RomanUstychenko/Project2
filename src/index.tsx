import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';

// import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './Theme';

const root = ReactDOM.createRoot(
     document.getElementById('root') as HTMLElement
   );
   root.render(
  // <Provider store={store}>
    // <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter basename="project2">
        {/* <ThemeProvider theme={theme}> */}
          <App />
        {/* </ThemeProvider> */}
      </BrowserRouter>
    // </PersistGate>
  // </Provider>
);
reportWebVitals();