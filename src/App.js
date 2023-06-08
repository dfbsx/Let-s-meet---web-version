import "./App.css";
import AccountView from "./views/AccountView";
import { useState, useEffect } from "react";
import StartPage from "./views/StartPage.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import setupAxios from "./crud/setupAxios";
import store from "./store";
import EditProfile from "./views/EditProfile";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/actions";
import { createConnection } from "./store/actions";
import { getUserData } from "./crud/getUserData";
import Protected from "./Protected";

function App() {
  const [userBio, setUserBio] = useState();
  const dispatch = useDispatch();
  const [isLoggedIn, setisLoggedIn] = useState(null);
  useEffect(() => {
    setupAxios(store);
    const lsdata = JSON.parse(localStorage.getItem("Lets_meeet"));
    if (lsdata?.userName) {
      setisLoggedIn(true);
      dispatch(createConnection(lsdata?.token))
      console.log("tak");
    } else {
      setisLoggedIn(false);
      console.log("nie");
    }
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<StartPage setisLoggedIn={setisLoggedIn}/>}
            />
            <Route
              path="/accountview"
              element={
                <Protected>
                  <AccountView setisLoggedIn={setisLoggedIn} />
                </Protected>
              }
            />
            <Route
              path="/editProfile"
              element={
                <Protected>
                  <EditProfile />
                </Protected>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
 
}

export default App;
