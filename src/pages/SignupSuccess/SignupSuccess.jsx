import React from 'react'
import './SignupSuccess.css'
import Owl from '../../Owl.svg'

export default function SignupSuccess() {
  return (
    <div className='signupsuccess-container'>
      <div className='signupsuccess-box'>
        <img src={Owl} alt='Owl'/>
        <p>회원가입에 성공하여<br/>성향 조사 페이지로 이동합니다</p>
      </div>
    </div>
  )
}
