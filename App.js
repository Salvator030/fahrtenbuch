/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import MainView from './src/Components/MainView/MainView';
import {implementDatabase} from './src/database/databaseHandler';

function App() {
  useEffect(() => {
    const fetch = async () => {
      await implementDatabase();
    };
    fetch();
  });

  return <MainView />;
}

export default App;
