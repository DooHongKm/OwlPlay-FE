import React, { useState, useEffect } from 'react'
import './SignupSuccess.css'
import Owl from '../../images/Owl.svg'
import Test from '../Test/Test'

export default function SignupSuccess() {

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
        <div className='signupsuccess-container'>
          <div className='signupsuccess-box'>
            <img src={Owl} alt='Owl'/>
            <p>회원가입에 성공하여<br/>성향 조사 페이지로 이동합니다</p>
          </div>
        </div>
      : <Test/>}
    </div>
  )
}