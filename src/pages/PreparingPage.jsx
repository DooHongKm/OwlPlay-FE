import React from 'react'
import './Preparing.css'
import Owl from '../../images/Owl.svg'
import Header from '../../features/Header/Header'


export default function PreparingPage() {

  return (
      <div className='preparing-container'>
        <Header/>
        <div className='preparing-body'>
          <div className='preparing-box'>
            <img src={Owl} alt='Owl'/>
            <p>준비중입니다</p>
          </div>
        </div>
      </div>
  )
}