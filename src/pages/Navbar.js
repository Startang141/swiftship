import React, { useRef } from 'react';
//import image
import logoSwift from '../assets/logo.svg';
import hmgBtn from '../assets/humberger-btn.svg';
import clsBtn from '../assets/close-btn.svg';

function Navbar() {  
  const navbarRef = useRef();

  const showNavbar = () => {
		navbarRef.current.classList.toggle(
			"hidden"
		);
	};

  return (
    <div>
        <nav className='flex justify-between items-center'>
            <img src={logoSwift} alt='logo'></img>
            <img className='right-0 cursor-pointer' onClick={showNavbar} src={hmgBtn} alt='button hamburger'></img>
            <div ref={navbarRef} className='absolute top-0 right-0 h-screen pt-14 font-bold text-white w-full bg-black text-center bg-opacity-95 hidden'>
            <img className='ml-[308px] cursor-pointer' onClick={showNavbar} src={clsBtn} alt='close button'></img>
            <ul className='mt-9'>
              <li>Home</li>
              <li className='mt-5'>Products</li>
              <li className='mt-5'>Career</li>
              <li className='mt-5'>Contact Us</li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar