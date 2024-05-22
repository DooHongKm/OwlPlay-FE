import React from 'react'
import './RecommendList.css'
import MovieCard from '../../components/MovieCard/MovieCard'

export default function RecommendList() {
  return (
    <div className='recommendlist-container'>
      <button>←</button>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <button>→</button>
    </div>
  )
}
