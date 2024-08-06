// import react
import React, { useState, useEffect } from 'react';

// import redux
import { useSelector, useDispatch } from 'react-redux';
import { setRecs } from '../redux/recs';

// import assets
import data from '../assets/data/recommendEx.json';

// import components
import Header from '../components/Header';
import RecommendList from '../components/RecommendList';

// import style sheets
import '../styles/pages/MainPage.css'

// main page component
const MainPage = () => {

  // redux state
  const id = useSelector((state) => (state.id.value));
  const recList = useSelector((state) => (state.recs.value));
  const dispatch = useDispatch();

  // fetch recommend data
  useEffect(() => {
    const sendIdInfo = async () => {
      try {
        // endpoint : /api/recommend
        // request : {"id": string}
        // response : {"title": string, "first": string, ..., "tenth": string}
        const response = await fetch('/api/recommend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id })
        });
        // const data = await response.json();
        dispatch(setRecs(data)); 
      } catch (error) {
        console.error('recommend error:', error);
      }
    };
    sendIdInfo();
  }, [dispatch, id]);

  // return
   return (
    <div className='main-container'>
      <Header/>
      <div className='main-body'>
        {recList.length === 0 ? null :
          <div className='main-box'>
            <div className='main-list'>
              <p>{recList[0].title}</p>
              <RecommendList movie10={recList[0]}/>
            </div>
            <hr/>
            <div className='main-list'>
              <p>{recList[1].title}</p>
              <RecommendList movie10={recList[1]}/>
            </div>
            <hr/>
            <div className='main-list'>
              <p>{recList[2].title}</p>
              <RecommendList movie10={recList[2]}/>
            </div>
            <hr/>
            <div className='main-list'>
              <p>{recList[3].title}</p>
              <RecommendList movie10={recList[3]}/>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

// export
export default MainPage;