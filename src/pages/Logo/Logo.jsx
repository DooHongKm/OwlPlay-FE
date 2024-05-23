import React, { useState, useEffect } from 'react'
import './Logo.css'
import {ReactComponent as OwlLogo} from '../../OwlLogo.svg'
import Login from '../Login/Login';

export default function Logo() {

    // 5초 후 Login Page로 이동
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLogo(false);
      }, 5000);
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
