import "./App.css";
import { ProcessProvider, ProcessConsumer } from "contexts/process/index";

/** Components */
import Clock from "components/System/Taskbar/Clock/index";
import ProcessLoader from "components/System/ProcessLoader";

function App() {
  function startMenu() {
    console.log("start menu");
  }

  return (
    <ProcessProvider>
      <ProcessLoader />
      <main></main>
      <nav>
        <button onClick={() => startMenu()}>
          <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
          </svg>
        </button>
        <div></div>
        <div id="clock">
          <Clock />
        </div>
      </nav>
    </ProcessProvider>
  );
}

export default App;
