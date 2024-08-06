// import react
import React, { useEffect, useState } from 'react';

// import components
import MovieCard from '../components/MovieCard';

// import hooks
import useWindowSize from '../hooks/useWindowSize';

// import style sheets
import '../styles/components/RecommendList.css';

// recommend list component
const RecommendList = ({ movie10 }) => {

  // local state
  const [currentNum, setCurrentNum] = useState(0);

  console.log(currentNum, movie10);
  // local variable
  const { width } = useWindowSize();

  // init state
  useEffect(() => {
    setCurrentNum(0);
  }, [width]);

  // increase or decrease page number
  const nextPage = () => {
    setCurrentNum((currentNum) => (currentNum > 3 ? currentNum : currentNum + 1));
  }
  const prevPage = () => {
    setCurrentNum((currentNum) => (currentNum < 1 ? currentNum : currentNum - 1));
  }

  // return
  return (
    <div className='switch-container'>
      {width < 1200 ?
        <div className='recommendlist-container'>
          {currentNum < 1 ?
            <div className='three-card'>
              <button className='hidden-button'>←</button>
              <MovieCard movieData={movie10.first}/>
              <MovieCard movieData={movie10.second}/>
              <MovieCard movieData={movie10.third}/>
              <button onClick={nextPage}>→</button>
            </div> :
            (currentNum === 1 ?
              <div className='three-card'>
                <button onClick={prevPage}>←</button>
                <MovieCard movieData={movie10.fourth}/>
                <MovieCard movieData={movie10.fifth}/>
                <MovieCard movieData={movie10.sixth}/>
                <button onClick={nextPage}>→</button>
              </div> :
              (currentNum === 2 ?
                <div className='three-card'>
                  <button onClick={prevPage}>←</button>
                  <MovieCard movieData={movie10.seventh}/>
                  <MovieCard movieData={movie10.eighth}/>
                  <MovieCard movieData={movie10.ninth}/>
                  <button onClick={nextPage}>→</button>
                </div> :
                <div className='three-card'>
                  <button onClick={prevPage}>←</button>
                  <MovieCard movieData={movie10.tenth}/>
                  <span className='empty-card'/>
                  <span className='empty-card'/>
                  <button className='hidden-button'>→</button>
                </div>
              )
            )
          }
        </div> :
        (width < 1800 ?
          <div className='recommendlist-container'>
            {currentNum < 1 ?
              <div className='four-card'>
                <button className='hidden-button'>←</button>
                <MovieCard movieData={movie10.first}/>
                <MovieCard movieData={movie10.second}/>
                <MovieCard movieData={movie10.third}/>
                <MovieCard movieData={movie10.fourth}/>
                <button onClick={nextPage}>→</button>
              </div> :
              (currentNum === 1 ?
                <div className='four-card'>
                  <button onClick={prevPage}>←</button>
                  <MovieCard movieData={movie10.fifth}/>
                  <MovieCard movieData={movie10.sixth}/>
                  <MovieCard movieData={movie10.seventh}/>
                  <MovieCard movieData={movie10.eighth}/>
                  <button onClick={nextPage}>→</button>
                </div> :
                <div className='four-card'>
                  <button onClick={prevPage}>←</button>
                  <MovieCard movieData={movie10.ninth}/>
                  <MovieCard movieData={movie10.tenth}/>
                  <span className='empty-card'/>
                  <span className='empty-card'/>
                  <button className='hidden-button'>→</button>
                </div>
              )
            }
          </div> :
          <div className='recommendlist-container'>
            {currentNum < 1 ?
              <div className='five-card'>
                <button className='hidden-button'>←</button>
                <MovieCard movieData={movie10.first}/>
                <MovieCard movieData={movie10.second}/>
                <MovieCard movieData={movie10.third}/>
                <MovieCard movieData={movie10.fourth}/>
                <MovieCard movieData={movie10.fifth}/>
                <button onClick={nextPage}>→</button>
              </div> :
              <div className='five-card'>
                <button onClick={prevPage}>←</button>
                <MovieCard movieData={movie10.sixth}/>
                <MovieCard movieData={movie10.seventh}/>
                <MovieCard movieData={movie10.eighth}/>
                <MovieCard movieData={movie10.ninth}/>
                <MovieCard movieData={movie10.tenth}/>
                <button className='hidden-button'>→</button>
              </div>
            }
          </div>
        )
      }
    </div>
  )
}

// export
export default RecommendList;