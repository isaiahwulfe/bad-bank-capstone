import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './components/context.js';
import Navigation from './components/navbar.js';
import Home from './components/home.js';
import CreateAccount from './components/createaccount.js';
import Login from './components/login.js';
import Deposit from './components/deposit.js';
import Withdraw from './components/withdraw.js';
import AllData from './components/alldata.js';

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secretPass',balance:100}], userInfo:{loggedIn: false, userRef:0}}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/alldata/" element={<AllData />} />
        </Routes>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;