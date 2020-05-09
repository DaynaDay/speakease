
import './App.css';
import React, { useState, useEffect } from 'react';
import * as API from './utils/API';
import AuthService from './utils/auth';
import Header from './components/Header/Header';
import Navbar from './components/Navbar'; 

function App() {
  // set data to be used for UserInfoContext and make it available to all other components
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    // method to get user data after logging in
    getUserData: () => {
      // if user's logged in get the token or return null
      const token = AuthService.loggedIn() ? AuthService.getToken() : null;

      if (!token) {
        return false;
      }
      API.getMe(token)
        .then(({ data: { username, email } }) =>
          setUserInfo({ ...userInfo, username, email })
        )
        .catch((err) => console.log(err));
    },
  });

  // on load, get user data if a token exists
  useEffect(() => {
    userInfo.getUserData();
  });
  return (
    <>
   <Header />
   <Navbar />
    <div className="App">
    </div>
  </>
  );
}

export default App;

    