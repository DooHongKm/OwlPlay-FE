import React, { useState } from 'react'
import './MovieCard.css'
import Detail from '../../pages/Detail/Detail'

// state 말고 href를 사용해서 새로운 창으로 넘어가기

export default function MovieCard({ movieData, detailRequest }) {

  const arr = movieData.split(',').map(value => value.trim());

  return (
    <div className='moviecard-container'>
      <button>
          <img src={arr[2]} alt='poster'/>
          <div className='moviecard-text'>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>  
          </div>      
      </button>
    </div>
  )
}
