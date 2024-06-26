import React, { useState, useEffect } from 'react'
import './Signup.css'
import Login from '../Login/Login';
import SignupSuccess from '../SignupSuccess/SignupSuccess';

export default function Signup({ setUserId }) {

  // 전달할 회원가입 관련 정보
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [birthday, setBirthday] = useState('');

  // id 및 pw 오류 인식
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pw2Error, setPw2Error] = useState(false); 

  // 이전 버튼 -> 로그인 페이지로 이동
  const [loginRequest, setLoginRequest] = useState(false);

  // 회원가입 성공 -> 회원가입 성공 페이지로 이동
  const [signupSuccess, setSignupSuccess] = useState(false);

  // 회원가입 정보를 보내고 P/F를 받아오는 함수
  const sendSignupInfo = async (event) => {
    event.preventDefault();   // 페이지 새로고침 방지
    try {
      // API 엔드포인트 : /api/signup
      // request : {"id": '~~', "pw": '~~', "pw2": '~~', "name": '~~', "contact": '~~', "birthday": '~~'}
      // response : {"message": '~~~'}
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, pw, pw2, name, contact, birthday }),
      });
      // const data = await response.json();   // 실제 실행용
      const data = {"message": 'pass'};   // 테스트용
      if (data.message === 'pass') {
        setSignupSuccess(true);
      } else if (data.message === 'id-error') {
        setIdError(true);
        setPwError(false);
        setPw2Error(false);
      } else if (data.message === 'pw-error') {
        setIdError(false);
        setPwError(true);
        setPw2Error(false);
      } else if (data.message === 'pw2-error') {
        setIdError(false);
        setPwError(false);
        setPw2Error(true);
      }
    } catch (error) {
      console.error('signup error:', error);
    }
  };

  useEffect(() => {
    if (signupSuccess) {
      setUserId(id);
    }
  }, [id, setUserId, signupSuccess])

  return (
    <div className='switch-container'>
      {loginRequest ? <Login/> : (signupSuccess ? <SignupSuccess id={id}/> :
        <div className='signup-container'>
          <form onSubmit={sendSignupInfo}>
            <div className='signup-box'>
              <p>회원가입</p>
              <div className='signup-id'>
                <div className='signup-text'>
                  <p>아이디</p>
                  <p className={idError ? 'signup-input-text-error' : 'signup-input-text'}>사용할 수 없는 아이디입니다.</p>
                </div>
                <div className='signup-id-input'>
                  <input 
                    type='text'
                    placeholder='아이디 입력 (영문, 숫자 포함 6~20자)'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <button type='button'>중복확인</button>
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
                <button type='submit'>다음 &gt;</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
