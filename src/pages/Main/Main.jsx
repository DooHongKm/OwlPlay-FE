import React from 'react'
import './Main.css'
import Header from '../../features/Header/Header'
import RecommendList from '../../features/RecommendList/RecommendList'

export default function Main({ data }) {
   return (
    <div className='main-container'>
      <Header/>
      <div className='main-body'>
        <div className='main-box'>
          <div className='main-list'>
            <p>{data[0].title}</p>
            <RecommendList movie10={data[0]}/>
          </div>
          <hr/>
          <div className='main-list'>
            <p>{data[1].title}</p>
            <RecommendList movie10={data[1]}/>
          </div>
          <hr/>
          <div className='main-list'>
            <p>{data[2].title}</p>
            <RecommendList movie10={data[2]}/>
          </div>
          <hr/>
          <div className='main-list'>
            <p>{data[3].title}</p>
            <RecommendList movie10={data[3]}/>
          </div>
        </div>
      </div>
    </div>
  )
}
