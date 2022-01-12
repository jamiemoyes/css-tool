import "./App.css";
import { AppProvider } from "./context/GlobalContext";
import { ControlCenter } from "./ControlCenter/ControlCenter.js";
import PreviewBox from "./PreviewBox/PreviewBox";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <div className="AppContainer">
          <PreviewBox />
          <ControlCenter />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
