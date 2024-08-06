// import react
import React, { useState } from 'react';

// import components
import MovieCard from '../components/MovieCard';

// import style sheets
import '../styles/components/RecommendList.css';

// recommend list component
const RecommendList = ({ movie10 }) => {

  // local state
  const [currentNum, setCurrentNum] = useState(0);

  // increase or decrease page number
  const nextPage = () => {
    setCurrentNum((currentNum) => (currentNum > 1 ? currentNum : currentNum + 1));
  }
  const prevPage = () => {
    setCurrentNum((currentNum) => (currentNum < 1 ? currentNum : currentNum - 1));
  }

  // return
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

// export
export default RecommendList;