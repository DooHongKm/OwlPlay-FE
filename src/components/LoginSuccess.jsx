import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginSuccess.css'
import Owl from '../../images/Owl.svg'

export default function LoginSuccess() {

  // 2초 후 메인 페이지로 이동
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='switch-container'>
      <div className='loginsuccess-container'>
        <div className='loginsuccess-box'>
          <img src={Owl} alt='Owl'/>
          <p>로그인에 성공하여<br/>메인 추천 페이지로 이동합니다</p>
        </div>
      </div>
    </div>
  )
}