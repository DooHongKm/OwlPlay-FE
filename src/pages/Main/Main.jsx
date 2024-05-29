import React from 'react'
import './Main.css'
import Header from '../../features/Header/Header'
import RecommendList from '../../features/RecommendList/RecommendList'

export default function Main({ userData }) {
  return (
    <div className='main-container'>
      <Header/>
      <div className='main-body'>
        <div className='main-box'>
          <div className='main-list'>
            <p>한국 영화 TOP 10</p>
            <RecommendList/>
          </div>
          <hr/>
          <div className='main-list'>
            <p>외국 영화 TOP 10</p>
            <RecommendList/>
          </div>
          <hr/>
          <div className='main-list'>
            <p>액션 영화 TOP 10</p>
            <RecommendList/>
          </div>
          <hr/>
          <div className='main-list'>
            <p>멜로 영화 TOP 10</p>
            <RecommendList/>
          </div>
        </div>
      </div>
    </div>
  )
}
