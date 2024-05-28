import React, { useState, useEffect } from 'react'
import './LoginSuccess.css'
import Owl from '../../images/Owl.svg'
import Main from '../Main/Main';

export default function LoginSuccess() {

  // 2초 후 메인 페이지로 이동
  const [showSuccess, setShowSuccess] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='switch-container'>
      {showSuccess ? 
        <div className='loginsuccess-container'>
          <div className='loginsuccess-box'>
            <img src={Owl} alt='Owl'/>
            <p>로그인에 성공하여<br/>메인 추천 페이지로 이동합니다</p>
          </div>
        </div>
      : <Main/>}
    </div>
  )
}