import React from 'react'
import './Header.css'
import OwlLogo from '../../images/OwlLogo.svg'

// 각 버튼을 해당 페이지로 연결
// 검색 API 통신 구현

export default function Header() {
  return (
    <div className='header-container'>
      <img src={OwlLogo} alt='OwlLogo'/>
      <button type='button'>Home</button>
      <button type='button'>Movie</button>
      <button type='button'>Drama</button>
      <button type='button'>Entertainment</button>
      <button type='button'>Animation</button>
      <div className='empty-space'></div>
      <div className='search-box'>
        <input></input>
        <button type='button'>⌕</button>
      </div>
      <button type='button'>내 정보</button>
    </div>
  )
}
