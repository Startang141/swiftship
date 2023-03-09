import React from 'react';
//import image
import logoSwift from '../assets/logo.svg';
import hmgBtn from '../assets/humberger-btn.svg';

function navbar() {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <img src={logoSwift} alt='logo'></img>
            <img src={hmgBtn} alt='button hamburger'></img>
        </div>
    </div>
  )
}

export default navbar