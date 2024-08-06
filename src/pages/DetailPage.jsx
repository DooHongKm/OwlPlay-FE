// import react
import React, { useState, useEffect } from 'react'

// import redux
import { useSelector } from 'react-redux';

// import assets
import data from '../assets/data/detailEx.json';

// import hooks
import useWindowSize from '../hooks/useWindowSize';

// import components
import Header from '../components/Header';

// import style sheets
import '../styles/pages/DetailPage.css';


// detail page component
const DetailPage = () => {

  // redux state
  const title = useSelector((state) => (state.title.value));

  // local state
  const [movieData, setMovieData] = useState({});
  const [ottArray, setOttArray] = useState([]);
  const [ottLinkArray, setOttLinkArray] = useState([]);

  // local variable
  const { height } = useWindowSize(); 

  // fetch movie data
  const sendMovieTitle = async () => {
    try {
      // API 엔드포인트 : /api/detail
      // request : {"title": string}
      // response : {"title": string, "genre": string, "rating": string,
      //             "age": number, "time": number, "script": string,
      //             "OTT": string[], "OTTlink": string[]}
      const response = await fetch('/api/detail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      // const data = await response.json();
      setMovieData(data);
    } catch (error) {
      console.error('login error:', error);
    }
  };

  useEffect(() => {
    sendMovieTitle();
  }, [title]);

  useEffect(() => {
    if (movieData.OTT && movieData.OTTlink) {
      setOttArray(movieData.OTT.split(', '));
      setOttLinkArray(movieData.OTTlink.split(', '));
    }
  }, [movieData]);

  // return
  return (
    <div className='detail-container'>
      <Header/>
      <div className='detail-body' style={{height:`${height-85}px`}}>
        {ottArray.length === 0 ? null : 
          <div className='detail-box'>
            <img className='detail-overlay' src={movieData.posterlink}/>
            <div className='detail-overlay'/>
            <div className='detail-title'>
              <p>{movieData.title}</p>
              {movieData.genre && movieData.genre.split(',').map((genre, index) => (
                <p key={index}>{genre.trim()}</p>
              ))}
            </div>
            <div className='detail-info'>
              <p>{movieData.rating}</p>
              <p>{movieData.age}세 이용가</p>
              <p>{Math.floor(movieData.time / 60)}시간 {movieData.time % 60}분</p>
            </div>
            <p>{movieData.script}</p>
            {ottArray.map((OTT, index) => (
              <div className='detail-link' key={index}>
                <p>{OTT}</p>
                <button onClick={() => window.open(ottLinkArray[index], '_blank')}>
                  바로가기
                </button>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

// export
export default DetailPage;