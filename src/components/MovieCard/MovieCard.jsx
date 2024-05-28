import React from 'react'
import './MovieCard.css'
import Poster from '../../images/Poster.svg'

export default function MovieCard() {
  return (
    <div className='moviecard-container'>
      <button>
          <img src={Poster} alt='poster'/>
          <div className='moviecard-text'>
            <p>최강야구</p>
            <p>★ 9.4</p>  
          </div>      
      </button>
    </div>
  )
}
