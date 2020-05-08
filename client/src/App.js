import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import AuthService from './utils/auth';

function App() {

    // set data to be used for UserInfoContext and make it available to all other components
    const [userInfo, setUserInfo] = useState({
      username: '',
      email: '',
      bookCount: 0,
      // method to get user data after logging in
      getUserData: () => {
        // if user's logged in get the token or return null
        const token = AuthService.loggedIn() ? AuthService.getToken() : null;
  
        if (!token) {
          return false;
        }
        API.getMe(token)
          .then(({ data: { username, email, savedBooks, bookCount } }) =>
            setUserInfo({ ...userInfo, username, email, savedBooks, bookCount })
          )
          .catch((err) => console.log(err));
      },
    });

  
    // on load, get user data if a token exists
    useEffect(() => {
      userInfo.getUserData();
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
