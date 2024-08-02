import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import OwlLogo from '../../images/OwlLogo.svg'


export default function Header() {

  // 검색
  const [text, setText] = useState('');
  const [searchSuccess, setSearchSuccess] = useState(false);
  const search = async () => {
    try {
      // endpoint : /api/search
      // request : {"text": '~~~'}
      // response : {"message": '~~~'}
      setSearchSuccess(false);
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
      });
      // const data = await response.json();   // 실제 실행용
      const data = {"message": 'pass'};   // 테스트용
      if (data.message === 'pass') {
        setSearchSuccess(true);
      } 
    } catch (error) {
      console.error('login error:', error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  const navigate = useNavigate();
  const goMain = () => {
    navigate('/main');
  }
  const goPreparing = () => {
    navigate('/preparing');
  }
  const goDetail = () => {
    navigate(`/detail/${text}`);
  }
  useEffect(() => {
    if (searchSuccess) {
      goDetail();
    }
  }, [searchSuccess]);

  return (
    <div className='header-container'>
      <img src={OwlLogo} alt='OwlLogo'/>
      <button onClick={goMain}>Home</button>
      <button onClick={goPreparing}>Movie</button>
      <button onClick={goPreparing}>Drama</button>
      <button onClick={goPreparing}>Entertainment</button>
      <button onClick={goPreparing}>Animation</button>
      <div className='empty-space'/>
      <div className='search-box'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={search}>⌕</button>
      </div>
      <button onClick={goPreparing}>내 정보</button>
    </div>
  )
}