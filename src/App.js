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

// Detail 구현해서 Main과 연결
// TestComplete에서 userData를 input으로 API 통신을 하여 output을 Main으로 전달
// 헤더 버튼과 페이지 연결, 검색 API

export default function App() {
  return (
    <div className='app-container'>
      <TestComplete/>
    </div>
  )
}