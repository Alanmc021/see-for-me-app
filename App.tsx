import React from 'react';
import { AuthProvider } from './src/contexts/Auth';
import { Router } from './src/routes/Routes';
import { ThemeProvider } from './src/theme/Theme';

import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'; 
import { store, persistor } from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;




 