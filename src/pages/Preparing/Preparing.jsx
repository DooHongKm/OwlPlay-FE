import React, { useState, useEffect } from 'react'
import './Preparing.css'
import Owl from '../../images/Owl.svg'
import Header from '../../features/Header/Header'


export default function Preparing() {

  // 2초 후 메인 페이지로 이동
  const [showError, setShowError] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='switch-container'>
      {showError ? 
        <div className='preparing-container'>
          <Header/>
          <div className='preparing-body'>
            <div className='preparing-box'>
              <img src={Owl} alt='Owl'/>
              <p>준비중입니다</p>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  )
}