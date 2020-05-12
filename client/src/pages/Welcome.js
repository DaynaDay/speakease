import React from "react";
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import PoemForm from '../components/PoemForm';
import UserInfoContext from '../utils/UserInfoContext';


function Welcome() {

  

  return (
    <>
      <Header />
      <Navbar />
      <PoemForm/>
    </>
  )
}

export default Welcome; 