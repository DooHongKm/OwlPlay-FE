import React, { useState, useEffect } from 'react'
import Logo from './pages/Logo/Logo'
import Login from './pages/Login/Login'
import LoginSuccess from './pages/LoginSuccess/LoginSuccess'
import Signup from './pages/Signup/Signup'
import SignupSuccess from './pages/SignupSuccess/SignupSuccess'
import Test from './pages/Test/Test'
import TestComplete from './pages/TestComplete/TestComplete'
import Main from './pages/Main/Main'
import Detail from './pages/Detail/Detail'
import Preparing from './pages/Preparing/Preparing'

export default function App() {
  return (
    <div className='app-container'>
      {/* {showLogo ? <Logo/> : <Login/>} */}
      {/* {signupRequest ? <Signup/> : <Login setSignupRequest={setSignupRequest}/>} */}
      <Logo/>
    </div>
  )
}
