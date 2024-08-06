// import react
import React from 'react';

// import assets
import Owl from '../assets/images/Owl.svg';

// import components
import Header from '../components/Header';

// import style sheets
import '../styles/pages/PreparingPage.css';

// preparing page component
const PreparingPage = () => {

  // return
  return (
      <div className='preparing-container'>
        <Header/>
        <div className='preparing-body'>
          <div className='preparing-box'>
            <img src={Owl} alt='Owl'/>
            <p>준비중입니다</p>
          </div>
        </div>
      </div>
  )
}

export default PreparingPage;