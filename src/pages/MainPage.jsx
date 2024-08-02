import React, { useState, useEffect } from 'react'
import './Main.css'
import Header from '../../features/Header/Header'
import RecommendList from '../../features/RecommendList/RecommendList'
import data from '../../datas/recommendEx.json'   // 테스트용

export default function MainPage({ id }) {

  // id 정보를 보내고 추천 리스트를 받아오는 함수
  const [recommends, setRecommends] = useState([]);
  const sendIdInfo = async (event) => {
    try {
      // endpoint : /api/recommend
      // request : {"id": '~~~'}
      // response : {"title": '~~', "first": '~~', ..., "tenth": '~~'}
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      // const data = await response.json();   // 실제 실행용
      setRecommends(data)
    } catch (error) {
      console.error('login error:', error);
    }
  };

  useEffect(() => {
    sendIdInfo();
  }, []);

   return (
    <div className='main-container'>
      <Header/>
      <div className='main-body'>
        {recommends.length === 0 ? null :
          <div className='main-box'>
            <div className='main-list'>
              <p>{recommends[0].title}</p>
              <RecommendList movie10={recommends[0]}/>
            </div>
            <hr/>
            <div className='main-list'>
              <p>{recommends[1].title}</p>
              <RecommendList movie10={recommends[1]}/>
            </div>
            <hr/>
            <div className='main-list'>
              <p>{recommends[2].title}</p>
              <RecommendList movie10={recommends[2]}/>
            </div>
            <hr/>
            <div className='main-list'>
              <p>{recommends[3].title}</p>
              <RecommendList movie10={recommends[3]}/>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
