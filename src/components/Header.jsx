// import react
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import redux
import { useDispatch } from 'react-redux';
import setTitle from '../redux/title';

// import assets
import OwlLogo from '../assets/images/OwlLogo.svg';

// import components
import useWindowSize from '../hooks/useWindowSize';

// import style sheets
import '../styles/components/Header.css';


// header component
const Header = () => {

  // redux
  const dispatch = useDispatch();

  // local state
  const [text, setText] = useState('');
  const [searchSuccess, setSearchSuccess] = useState(false);

  // local variable
  const { width } = useWindowSize();

  // search api
  const search = async () => {
    setSearchSuccess(false);
    try {
      // endpoint : /api/search
      // request : {"text": string}
      // response : {"message": string}
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
      });
      const data = {"message": '어벤져스: 엔드게임'};  // const data = await response.json(); 
      if (data.message !== 'error') {
        setSearchSuccess(true);
        dispatch(setTitle(data.message));
      } 
    } catch (error) {
      console.error('search error:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  // navigate to detail page
  const navigate = useNavigate();
  useEffect(() => {
    if (searchSuccess) {
      navigate(`/detail`);
      setSearchSuccess(false);
    }
  }, [navigate, searchSuccess]);

  // navigate to other pages
  const goMain = () => {
    navigate('/main');
  }
  const goPreparing = () => {
    navigate('/preparing');
  }

  // return
  return (
    <div className='header-container'>
      <img src={OwlLogo} alt='OwlLogo'/>
      <button onClick={goMain}>Home</button>
      <button onClick={goPreparing}>Movie</button>
      <button onClick={goPreparing}>Drama</button>
      <button onClick={goPreparing}>Entertainment</button>
      <button onClick={goPreparing}>Animation</button>
      <span className='stretch'/>
      {width >= 1350 ?
        <div className='search-box'>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={search}>⌕</button>
        </div> :
        <span className='empty'/>
      }
      <button className='mypage' onClick={goPreparing}>내 정보</button>
    </div>
  )
}

// export
export default Header;