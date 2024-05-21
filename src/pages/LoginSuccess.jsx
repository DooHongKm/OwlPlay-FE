import React from 'react'
import Owl from '../Owl.svg'

export default function LoginSuccess() {
  return (
    <div className='loginsuccess-container'>
      <div className='loginsuccess-box'>
        <img src={Owl} alt='Owl'/>
        <p>로그인에 성공하여<br/>메인 추천 페이지로 이동합니다</p>
      </div>
    </div>
  )
}
