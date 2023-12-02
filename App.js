/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import MainView from './src/Components/MainView/MainView';
import useDatabase from './src/stores/databaseStore';
import {implementDatabase} from './src/database/databaseHandler';
import {useBetween} from 'use-between';

function App() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {fetchData} = useShareDatabase();
  useEffect(() => {
    const fetch = async () => {
      await implementDatabase();
    };
    fetch();
  });

  return <MainView />;
}

export default App;
