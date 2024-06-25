import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './TestComplete.css'
import Owl from '../../images/Owl.svg'

// state를 하나 만들어서 api 반환이 오면 페이지를 넘기도록 수정해야 함

export default function TestComplete({ id, userData }) {

  // id와 성향 정보를 보내는 함수
  const sendInfo = async () => {
    try {
      // endpoint : /api/test
      // request : {"id": '~~', "1": '~~', "2": '~~', ...}
      // response : {}
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id, userData),
      });
      // const data = await response.json();   // 실제 실행용
    } catch (error) {
      console.error('login error:', error);
    }
  };

  useEffect(() => {
    sendInfo();
  }, []);

  // 2초 후 메인 페이지로 이동
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main')
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='switch-container'>
      <div className='testcomplete-container'>
        <div className='testcomplete-box'>
          <img src={Owl} alt='Owl'/>
          <p>성향 조사를 완료하여<br/>메인 추천 페이지로 이동합니다</p>
        </div>
      </div>
    </div>
  )
}