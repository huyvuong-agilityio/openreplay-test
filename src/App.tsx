import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { TrackerContext, TrackerProvider } from "./vendors";

const RenderContent = () => {
  const { initTracker, startTracking, logEvent, logIssue } =
    React.useContext(TrackerContext);

  React.useEffect(() => {
    initTracker();
    startTracking();
  }, []);

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button
        onClick={() => {
          logEvent({
            name: "Event",
            data: {
              click_type: "event",
            },
          });

          logIssue({
            name: "Issue",
            data: {
              click_type: "issue",
            },
          });

          try {
            throw "error";
          } catch (error) {
            reportError(
              new Error("Show Error", {
                cause: {
                  message: JSON.stringify(error),
                } as Error,
              })
            );
          }
        }}
      >
        Click Shop
      </button>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Deploy times: 20</h1>
      <TrackerProvider
        config={{
          projectKey: "IPQJ2ytBAXqwnwxtPmgh",
        }}
      >
        <RenderContent />
      </TrackerProvider>
    </div>
  );
}

export default App;
