import { MantineProvider, createTheme } from "@mantine/core";
import logo from "./logo.svg";
import "./App.css";
import { createTables, insertTestData } from "./database/databaseHandler";

import { MainView } from "./Components/MainView/MainView";
import '@mantine/core/styles/global.css';
import "@mantine/core/styles.css";


import { useEffect } from "react";

 function App() {
    //  createTables();
    //  insertTestData();
    

  

  return (
    <MantineProvider defaultColorScheme="light">
      <div className="App">
        <header className="App-header">
          <MainView />
        </header>
      </div>
    </MantineProvider>
  );
}

export default App;