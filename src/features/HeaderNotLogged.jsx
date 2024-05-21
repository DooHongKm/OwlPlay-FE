import React from 'react'
import OwlLogo from '../OwlLogo.svg'

export default function HeaderNotLogged() {
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
      <button type='button'>회원가입</button>
    </div>
  )
}
