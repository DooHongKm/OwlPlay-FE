import React, { useState, useEffect } from 'react'
import './TestComplete.css'
import Owl from '../../images/Owl.svg'
import Main from '../Main/Main';

export default function TestComplete() {

  // 2초 후 메인 페이지로 이동
  const [showComplete, setShowComplete] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComplete(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='switch-container'>
      {showComplete ? 
        <div className='testcomplete-container'>
          <div className='testcomplete-box'>
            <img src={Owl} alt='Owl'/>
            <p>성향 조사를 완료하여<br/>메인 추천 페이지로 이동합니다</p>
          </div>
        </div>
      : <Main/>}
    </div>
  )
}