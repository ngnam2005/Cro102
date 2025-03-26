import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import MainScreen from './components/MainScreen';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
