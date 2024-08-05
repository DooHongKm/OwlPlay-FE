// import react
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import redux
import { useDispatch, useSelector } from 'react-redux';
import { setChoiceNum, incChoiceNum, decChoiceNum } from '../redux/choiceNum';

// import assets
import questions from '../assets/data/questions.json';

// import components
import TestOption from '../components/TestOption';

// import style sheets
import '../styles/pages/TestPage.css';

// test page component
const TestPage = () => {
  
  // redux state
  const index = useSelector((state) => (state.choiceNum.value));
  const choices = useSelector((state) => (state.choices.value));
  const dispatch = useDispatch();

  console.log(choices);
  // local state
  const [goMain, setGoMain] = useState(false);

  // increase or decrease index
  const inc = () => {
    dispatch(incChoiceNum({}));
  }
  const dec = () => {
    dispatch(decChoiceNum({}));
  }

  // last question button click event
  useEffect(() => {
    if (index >= questions.length) {
      const sendChoiceInfo = async () => {
        try {
          // endpoint : /api/test
          // request : {"id": string, "choice1": string, ..., "choice5": string}
          // response : {"message": string}
          const response = await fetch('/api/test', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ choices }),
          });
          const data = {"message": 'OK'};  // const data = await response.json(); 
          if (data.message === 'OK') {
            setGoMain(true);
          }
        } catch (error) {
          console.error('api error:', error);
        }
      };
      sendChoiceInfo();
    }
  }, [index, choices])

  // navigate to main page
  const navigate = useNavigate();
  useEffect(() => {
    if (goMain) {
      navigate('/main');
      setGoMain(false);
      dispatch(setChoiceNum(0));
    }
  }, [navigate, dispatch, goMain])

  // return
  return (
    <div className='test-container'>
      {index >= questions.length ?
        <span/> :
        <p className='question-title'>{questions[index].question}</p>
      }
      {index >= questions.length ?
        <span/> :
        <TestOption data={questions[index]}></TestOption>
      }
      {index === 0 ? 
        <div className='button-container'>
          <button className='invisible-button'></button>
          <button onClick={inc}>다음 &gt;</button>
        </div> :
        (index >= questions.length ?
          <div className='button-container'>
            <button onClick={dec}>&lt; 이전</button>
            <button onClick={inc}>완료</button>
          </div> :
          <div className='button-container'>
            <button onClick={dec}>&lt; 이전</button>
            <button onClick={inc}>다음 &gt;</button>
          </div>
        )
      }
    </div>
  )
}

// export
export default TestPage;