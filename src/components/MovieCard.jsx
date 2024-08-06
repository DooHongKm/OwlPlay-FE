// import react
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import redux
import { useDispatch } from 'react-redux'
import { setTitle } from '../redux/title'

// import sytle sheets
import '../styles/components/MovieCard.css'

// movie card component
const MovieCard = ({ movieData }) => {

  // redux
  const dispatch = useDispatch();

  // local variable
  const arr = movieData.split(',').map(value => value.trim());

  // navigate to detail page
  const navigate = useNavigate();
  const clickCard = () => {
    dispatch(setTitle(arr[0]));
    navigate(`/detail`);
  }

  // return
  return (
    <div className='moviecard-container'>
      <button onClick={clickCard}>
          <img src={arr[2]} alt='poster'/>
          <div className='moviecard-text'>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>  
          </div>      
      </button>
    </div>
  )
}

// export
export default MovieCard;