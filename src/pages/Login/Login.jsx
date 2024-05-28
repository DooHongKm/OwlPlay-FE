import React, { useState } from 'react'
import './Login.css'
import OwlLogo from '../../images/OwlLogo.svg'
import Signup from '../Signup/Signup';
import LoginSuccess from '../LoginSuccess/LoginSuccess';

export default function Login() {

  // 전달할 id, pw 정보
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // id 오류, pw 오류 인식
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);

  // 회원가입 버튼 -> 회원가입 페이지로 이동
  const [signupRequest, setSignupRequest] = useState(false);

  // 로그인 성공 -> 로그인 성공 페이지로 이동
  const [loginSuccess, setLoginSuccess] = useState(false);

  const sendLoginInfo = async (event) => {
    event.preventDefault();   // 페이지 새로고침 방지
    try {
      // API 엔드포인트 : /api/login
      // request : {"id": '~~~', "pw": '~~~'}
      // response : {"message": '~~~'}
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, pw }),
      });
      // const data = await response.json();   // 실제 실행용
      const data = {"message": 'pass'};   // 테스트용
      if (data.message === 'pass') {
        setLoginSuccess(true);
      } else if (data.message === 'id-error') {
        setIdError(true);
        setPwError(false);
      } else if (data.message === 'pw-error') {
        setIdError(false);
        setPwError(true);
      }
    } catch (error) {
      console.error('login error:', error);
    }
  };

  return (
    <div className='switch-container'>
      {signupRequest ? <Signup/> : (loginSuccess ? <LoginSuccess/> :
        <div className='login-container'>
          <div className='login-box'>
            <div className='login-logo'>
              <img src={OwlLogo} alt='OwlLogo'/>
            </div>
            <span/>
            <form onSubmit={sendLoginInfo}>
              <div className='login-input'>
                <input 
                  type='text'
                  placeholder='ID'
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <p className={idError ? 'login-input-text-error' : 'login-input-text'}>존재하지 않는 아이디입니다.</p>
              </div>
              <div className='login-input'>
                <input 
                  type='password'
                  placeholder='PW'
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />
                <p className={pwError ? 'login-input-text-error' : 'login-input-text'}>잘못된 비밀번호입니다.</p>
              </div>
              <div className='login-button'>
                <button type='submit'>로그인</button>
                <button onClick={() => setSignupRequest(true)}>회원가입</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

    
  )
}