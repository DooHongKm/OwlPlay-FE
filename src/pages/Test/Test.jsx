import React from 'react'
import './Test.css'
import TestOption4 from '../../features/TestOption/TestOption4'
import TestOption6 from '../../features/TestOption/TestOption6'
import TestOption8 from '../../features/TestOption/TestOption8'

export default function Test() {
  return (
    <div className='test-container'>
      <div className='test-box'>
        <p>Q. 가장 좋아하는 장르의 영화를 고르세요.</p>
        <TestOption8/>
      </div>
    </div>
  )
}
