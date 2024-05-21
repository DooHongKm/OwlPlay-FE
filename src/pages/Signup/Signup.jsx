import React from 'react'
import './Signup.css'

export default function Signup() {
  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <p>회원가입</p>
        <div className='signup-id'>
          <div className='signup-text'>
            <p>아이디</p>
            <p>사용할 수 없는 아이디입니다.</p>
          </div>
          <div className='signup-id-input'>
            <input value="아이디 입력 (영문, 숫자 포함 6~20자)"></input>
            <button type='button'>중복확인</button>
          </div>
        </div>
        <div className='signup-pw'>
          <div className='signup-text'>
            <p>비밀번호</p>
            <p>올바르지 않은 비밀번호입니다.</p>
          </div>
          <input value="비밀번호 입력 (대문자, 숫자, 특수문자 포함 8~20자)"></input>
        </div>
        <div className='signup-pw'>
          <div className='signup-text'>
            <p>비밀번호 확인</p>
            <p>비밀번호가 일치하지 않습니다.</p>
          </div>
          <input value="비밀번호 재입력"></input>
        </div>  
        <div className='signup-etc'>
          <p>이름</p>
          <input value="이름 입력"></input>
        </div>
        <div className='signup-etc'>
          <p>전화번호</p>
          <input value="전화번호 입력 ('-' 제외 숫자 11자리)"></input>
        </div>
        <div className='signup-etc'>
          <p>생년월일</p>
          <input value="생년월일 입력 ('.'제외 숫자 8자리)"></input>
        </div>
      </div>
    </div>
  )
}
