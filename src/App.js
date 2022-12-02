import './App.css';
import AccountView from './views/AccountView';
import  {useState} from "react";
import StartPage from './views/StartPage.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  const [curView, setCurView] = useState("StartPage");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              curView={curView}
              setCurView={setCurView}
            />
          }
        />
        <Route
          path="/accountview"
          element={
            <AccountView
              curView={curView}
              setCurView={setCurView}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
