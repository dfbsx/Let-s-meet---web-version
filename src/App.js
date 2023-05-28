import './App.css';
import AccountView from './views/AccountView';
import { useState, useEffect } from "react";
import StartPage from './views/StartPage.jsx';
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import setupAxios from './crud/setupAxios';
import store from './store';
import EditProfile from './views/EditProfile';
import { useDispatch} from 'react-redux';
import { authenticate } from './store/actions';
import { createConnection } from './store/actions';
import { getUserData } from './crud/getUserData';

function App() {
  const [curView, setCurView] = useState("StartPage");
  const [userBio,setUserBio] = useState();
  const dispatch = useDispatch()
  /*useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("Lets_meeet"))
    if(user?.token){
      dispatch(authenticate(user.userName, user.token))
  }
  })*/
 
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
          <Route
            path="/editProfile"
            element={
              <EditProfile
                curView={curView}
                setCurView={setCurView}
              />
            }
          />
        </Routes>
      </div>
    </Provider>
  );
  setupAxios(store);
}

export default App;
