// import react
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import redux
import { useDispatch } from 'react-redux';
import { setId as setReduxId } from '../redux/id';

// import style sheets
import '../styles/pages/SignupPage.css';

// signup page component
const SignupPage = () => {

  // redux
  const dispatch = useDispatch();

  // local state (enter)
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [birthday, setBirthday] = useState('');

  // local state (determine)
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pw2Error, setPw2Error] = useState(false); 

  // local state (navigate)
  const [idCheck, setIdCheck] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [loginRequest, setLoginRequest] = useState(false);

  // id check button click event
  const clickIdCheck = async (e) => {
    e.preventDefault();
    try {
      // API 엔드포인트 : /api/idcheck
      // request : {"id": string}
      // response : {"message": string}
      const response = await fetch('/api/idcheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = {"message": 'pass'};  // const data = await response.json();
      if (data.message === 'pass') {
        setIdError(false);
      } else if (data.message == 'id-error') {
        setIdError(true);
      }
    } catch (error) {
      console.error('idcheck error:', error);
    } finally {
      setIdCheck(true);
    }   
  }

  // complete button click event
  const sendSignupInfo = async (e) => {
    e.preventDefault();
    try {
      // API 엔드포인트 : /api/signup
      // request : {"id": string, "pw": string, "pw2": string,
      //            "name": string, "contact": string, "birthday": string}
      // response : {"message": string}
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, pw, pw2, name, contact, birthday }),
      });
      const data = {"message": 'pass'};  // const data = await response.json();
      if (data.message === 'pass') {
        setSignupSuccess(true);
      } else if (data.message === 'pw-error') {
        setPwError(true);
        setPw2Error(false);
      } else if (data.message === 'pw2-error') {
        setPwError(false);
        setPw2Error(true);
      }
    } catch (error) {
      console.error('signup error:', error);
    }
  };

  // navigate to test page or login page
  const navigate = useNavigate();
  useEffect(() => {
    if (signupSuccess) {
      dispatch(setReduxId(id));
      navigate('/test');
      setSignupSuccess(false);
    }
  }, [navigate, signupSuccess])
  useEffect(() => {
    if (loginRequest) {
      navigate('/login');
      setLoginRequest(false);
    }
  }, [navigate, loginRequest])

  return (
    <div className='signup-container'>
      <form onSubmit={sendSignupInfo}>
        <div className='signup-inner-container'>
          <p>회원가입</p>
          <div className='signup-id'>
            <div className='signup-text'>
              <p>아이디</p>
              {idError ? 
                <p className='signup-input-text-error'>사용할 수 없는 아이디입니다.</p> :
                (idCheck ? 
                  <p className='signup-input-text-id'>사용 가능한 아이디입니다.</p> :
                  <p className='signup-input-text'></p>
                )
              }
            </div>
            <div className='signup-id-input'>
              <input 
                type='text'
                placeholder='아이디 입력 (영문, 숫자 포함 6~20자)'
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <button onClick={clickIdCheck}>중복확인</button>
            </div>
          </div>
          <div className='signup-pw'>
            <div className='signup-text'>
              <p>비밀번호</p>
              <p className={pwError ? 'signup-input-text-error' : 'signup-input-text'}>올바르지 않은 비밀번호입니다.</p>
            </div>
            <input 
              type='password'
              placeholder='비밀번호 입력 (대문자, 숫자, 특수문자 포함 8~20자)'
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <div className='signup-pw'>
            <div className='signup-text'>
              <p>비밀번호 확인</p>
              <p className={pw2Error ? 'signup-input-text-error' : 'signup-input-text'}>비밀번호가 일치하지 않습니다.</p>
            </div>
            <input 
              type='password'
              placeholder='비밀번호 재입력'
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
            />
          </div>  
          <div className='signup-etc'>
            <p>이름</p>
            <input 
                type='text'
                placeholder='이름 입력'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
          </div>
          <div className='signup-etc'>
            <p>전화번호</p>
            <input 
                type='text'
                placeholder="전화번호 입력 ('-' 제외 숫자 11자리)"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
          </div>
          <div className='signup-etc'>
            <p>생년월일</p>
            <input 
                type='text'
                placeholder="생년월일 입력 ('.'제외 숫자 8자리)"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
          </div>
          <div className='signup-button'>
            <button onClick={() => setLoginRequest(true)}>&lt; 이전</button>
            <button
              type='submit'
              className={(idCheck && !idError) ? 'visible-button' : 'invisible-button'}
            >완료 &gt;</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignupPage;