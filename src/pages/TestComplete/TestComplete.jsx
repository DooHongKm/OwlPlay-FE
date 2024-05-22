import React from 'react'
import './TestComplete.css'
import Owl from '../../Owl.svg'

export default function TestComplete() {
  return (
    <div className='testcomplete-container'>
      <div className='testcomplete-box'>
        <img src={Owl} alt='Owl'/>
        <p>성향 조사를 완료하여<br/>메인 추천 페이지로 이동합니다</p>
      </div>
    </div>
  )
}
