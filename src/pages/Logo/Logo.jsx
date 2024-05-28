import React, { useState, useEffect } from 'react'
import './Logo.css'
import {ReactComponent as OwlLogo} from '../../images/OwlLogo.svg'
import Login from '../Login/Login';

export default function Logo() {

  // 3초 후 Login Page로 이동
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='switch-container'>
      {showLogo ? 
        <div className='logo-container'>
          <OwlLogo/>
        </div>
      : <Login/>}
    </div>
  )
}