import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'
import Header from '../../features/Header/Header'
import data from '../../datas/detailEx.json'

// 페이지 주소에서 영화 제목을 가져온 후, API 통신을 통해 정보를 받아와 표시하기
// 해당 영화의 포스터로 백그라운드 설정 추가

export default function DetailPage() {

  // 페이지 주소에서 영화 제목을 가져오기
  const {title} = useParams();

  // OTT 링크를 위한 배열
  const [OTTArray, setOTTArray] = useState([]);
  const [OTTlinkArray, setOTTlinkArray] = useState([]);

  // 제목 정보를 보내고 세부 정보를 받아오는 함수
  const [movieData, setMovieData] = useState({});
  const sendMovieTitle = async (event) => {
    try {
      // API 엔드포인트 : /api/detail
      // request : {"title": '~~~'}
      // response : {"title": '~~', "genre": '~~, ~~', "rating": '~~', "age": '~~', "time": '~~', "script": '~~', "OTT": '~~, ~~, ~~', "OTTlink": '~~, ~~, ~~'}
      const response = await fetch('/api/detail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(title),
      });
      // const data = await response.json();   // 실제 실행용
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
      setOTTArray(movieData.OTT.split(', '));
      setOTTlinkArray(movieData.OTTlink.split(', '));
    }
  }, [movieData]);

  return (
    <div className='detail-container'>
      <Header/>
      <div className='detail-body'>
        {OTTArray.length === 0 ? null : 
          <div className='detail-box'>
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
            {OTTArray.map((OTT, index) => (
              <div className='detail-link' key={index}>
                <p>{OTT}</p>
                <button onClick={() => window.open(OTTlinkArray[index], '_blank')}>
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
