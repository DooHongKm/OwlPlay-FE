// import react
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import page components
import LogoPage from './pages/LogoPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TestPage from './pages/TestPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import PreparingPage from './pages/PreparingPage';

// app component
const App = () => {

  // return
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path="/" element={<LogoPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/detail" element={<DetailPage/>}/>
          <Route path="/preparing" element={<PreparingPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

// export
export default App;