import React, { useState } from 'react'
import './Test.css'
import questions from '../../datas/questions.json'
import TestOption from '../../features/TestOption/TestOption'
import TestComplete from '../TestComplete/TestComplete'

export default function TestPage({ id }) {
  
  // 몇 번째 질문인지 카운트하
  const [currentNum, setCurrentNum] = useState(0);

  // 사용자가 선택한 선택지를 저장
  const [testResult, setTestResult] = useState({});

  // currentNum을 1 증가시키고 선택지 정보를 받아오는 함수
  const nextPage = (key, value) => {
    setTestResult((res) => ({
      ...res,
      [key]: value
    }));
    setCurrentNum((currentNum) => currentNum + 1);
  }

  return (
    <div className='test-container'>
      {currentNum >= questions.length ? <TestComplete id={id} userData={testResult}/> :
        <div className='test-box'>
          <p>{questions[currentNum].question}</p>
          <TestOption num={currentNum} data={questions[currentNum]} nextPage={nextPage}/>
        </div>
      }
    </div>
  )
}
