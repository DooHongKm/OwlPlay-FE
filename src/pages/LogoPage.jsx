// import react
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import assets
import { ReactComponent as OwlLogo } from '../assets/images/OwlLogo.svg';

// import style sheets
import '../styles/pages/LogoPage.css';

// logo page component
const LogoPage = () => {

  // navigate to login page (3s)
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // return
  return (
    <div className='logo-container'>
      <OwlLogo className='logo-image'/>
    </div>
  )
}

// export
export default LogoPage;