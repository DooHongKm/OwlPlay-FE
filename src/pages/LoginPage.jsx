// import react
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import redux
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/id';

// import assets
import OwlLogo from '../assets/images/OwlLogo.svg'

// import style sheets
import '../styles/pages/LoginPage.css'

// login page component
const LoginPage = () => {

  // redux state
  const dispatch = useDispatch();

  // local state
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [signupRequest, setSignupRequest] = useState(false);

  // login button click event
  const sendLoginInfo = async (e) => {
    e.preventDefault();
    try {
      // endpoint : /api/login
      // request : {"id": string, "pw": string}
      // response : {"message": string}
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, pw }),
      });
      const data = {"message": 'pass'};  // const data = await response.json(); 
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

  // navigate to main page or signup page
  const navigate = useNavigate();
  useEffect(() => {
    if (loginSuccess) {
      dispatch(setId(id));
      navigate('/main');
      setLoginSuccess(false);
    }
  }, [navigate, loginSuccess])
  useEffect(() => {
    if (signupRequest) {
      navigate('/signup');
      setSignupRequest(false);
    }
  }, [navigate, signupRequest])

  return (
    <div className='login-container'>
      <div className='login-inner-container'>
        <div className='login-logo'>
          <img src={OwlLogo} alt='OwlLogo'/>
        </div>
        <form onSubmit={sendLoginInfo}>
          <div className='login-input'>
            <input 
              type='text'
              placeholder='ID'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <p className={idError ? 'input-error' : 'input-text'}>존재하지 않는 아이디입니다.</p>
          </div>
          <div className='login-input'>
            <input 
              type='password'
              placeholder='PW'
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <p className={pwError ? 'input-error' : 'input-text'}>잘못된 비밀번호입니다.</p>
          </div>
          <div className='login-button'>
            <button type='submit'>로그인</button>
            <button onClick={() => setSignupRequest(true)}>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;