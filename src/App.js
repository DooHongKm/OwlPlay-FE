import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logo from './pages/Logo/Logo'
import Main from './pages/Main/Main'
import Detail from './pages/Detail/Detail'
import Preparing from './pages/Preparing/Preparing'

// Header : 버튼 - 페이지 연결, 검색 API 통신하기

export default function App() {

  const [userId, setUserId] = useState('');

  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Logo setUserId={setUserId}/>}/>
          <Route path="/main" element={<Main id={userId}/>}/>
          <Route path="/detail/:title" element={<Detail/>}/>
          <Route path="/preparing" element={<Preparing/>}/>
        </Routes>
      </Router>
    </div>
  )
}