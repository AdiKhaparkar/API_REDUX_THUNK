import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/Store';
import HomeScreen from './src/screen/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
