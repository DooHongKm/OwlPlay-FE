import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard({ movieData }) {

  const arr = movieData.split(',').map(value => value.trim());

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${encodeURIComponent(arr[0])}`)
  }

  return (
    <div className='moviecard-container'>
      <button onClick={handleClick}>
          <img src={arr[2]} alt='poster'/>
          <div className='moviecard-text'>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>  
          </div>      
      </button>
    </div>
  )
}
