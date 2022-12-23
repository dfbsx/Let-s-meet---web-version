import './App.css';
import AccountView from './views/AccountView';
import { useState } from "react";
import StartPage from './views/StartPage.jsx';
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import setupAxios from './crud/setupAxios';
import store from './store';

function App() {
  const [curView, setCurView] = useState("StartPage");
  setupAxios(store);
  return (

    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
