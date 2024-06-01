import React, { useState } from 'react'
import './RecommendList.css'
import MovieCard from '../../components/MovieCard/MovieCard'

export default function RecommendList({ movie10 }) {

  // 해당 추천의 몇 번째 페이지인지 카운트
  const [currentNum, setCurrentNum] = useState(0);

  // currentNum을 1 증가/감소시키는 함수
  const nextPage = () => {
    setCurrentNum((currentNum) => (currentNum > 1 ? currentNum : currentNum + 1));
  }
  const prevPage = () => {
    setCurrentNum((currentNum) => (currentNum < 1 ? currentNum : currentNum - 1));
  }

  return (
    <div className='switch-container'>
      {currentNum < 1 ?
        <div className='recommendlist-container'>
          <button onClick={prevPage}>←</button>
          <MovieCard movieData={movie10.first}/>
          <MovieCard movieData={movie10.second}/>
          <MovieCard movieData={movie10.third}/>
          <MovieCard movieData={movie10.fourth}/>
          <button onClick={nextPage}>→</button>
        </div> :
        (currentNum === 1 ?
          <div className='recommendlist-container'>
            <button onClick={prevPage}>←</button>
            <MovieCard movieData={movie10.fourth}/>
            <MovieCard movieData={movie10.fifth}/>
            <MovieCard movieData={movie10.sixth}/>
            <MovieCard movieData={movie10.seventh}/>
            <button onClick={nextPage}>→</button>
          </div> :
          <div className='recommendlist-container'>
            <button onClick={prevPage}>←</button>
            <MovieCard movieData={movie10.seventh}/>
            <MovieCard movieData={movie10.eighth}/>
            <MovieCard movieData={movie10.ninth}/>
            <MovieCard movieData={movie10.tenth}/>
            <button onClick={nextPage}>→</button>
          </div>
        )
      }
    </div>
  )
}
