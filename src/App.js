import { MantineProvider, createTheme } from "@mantine/core";
import logo from "./logo.svg";
import "./App.css";
import { createTables, insertTestAddress } from "./Database/database";
import { CalendarView } from "./Components/Calendar";
import {MainView} from "./Components/MainView";
import "@mantine/core/styles.css";

function App() {
  createTables();
  insertTestAddress();
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
