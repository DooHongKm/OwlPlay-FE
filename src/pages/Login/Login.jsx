import React from 'react'
import './Login.css'
import OwlLogo from '../../OwlLogo.svg'

export default function Login() {
  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='login-logo'>
          <img src={OwlLogo} alt='OwlLogo'/>
        </div>
        <span/>
        <div className='login-input'>
          <input value="ID"></input>
          <p>존재하지 않는 아이디입니다.</p>
        </div>
        <div className='login-input'>
          <input value="PW"></input>
          <p>잘못된 비밀번호입니다.</p>
        </div>
        <div className='login-button'>
          <button type='button'>로그인</button>
          <button type='button'>회원가입</button>
        </div>
      </div>
    </div>
  )
}
