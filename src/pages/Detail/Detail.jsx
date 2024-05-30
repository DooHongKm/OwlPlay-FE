import React from 'react'
import './Detail.css'
import Header from '../../features/Header/Header'
import Poster from '../../images/Poster.svg'

export default function Detail({ title }) {
  return (
    <div className='detail-container'>
      <Header/>
      <div className='detail-body'>
        <div className='detail-box'>
          <div className='detail-overlay'/>
          <div className='detail-title'>
            <p>최강야구</p>
            <p>스포츠</p>
            <p>감동</p>
          </div>
          <div className='detail-info'>
            <p>★ 9.4</p>
            <p>15세 이용가</p>
            <p>2시간 10분</p>
          </div>
          <p>in or Nothing. 오직 승리만을 추구하는 사상 최강의 야구팀이 탄생했다. “우리보다 최강인 팀은 절대 없을 겁니다."</p>
          <div className='detail-link'>
            <p>Netflix</p>
            <button>바로가기</button>
          </div>
          <div className='detail-link'>
            <p>Disney+</p>
            <button>바로가기</button>
          </div>
          <div className='detail-link'>
            <p>CoupangPlay</p>
            <button>바로가기</button>
          </div>
        </div>
      </div>
    </div>
  )
}
