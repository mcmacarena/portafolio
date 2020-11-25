import React, {useState} from 'react';
import './styles/header.css';
import MenuToggle from './menuToggle'
import { animateScroll as scroll } from 'react-scroll';

const Header = () => {
  let [ menuVisibility, setMenuVisibility ]= useState(false);
  return (
    <header className='header'>
      <div className='containerLogoHome'>
        <button className='btnLogo' onClick={() => {scroll.scrollTo(0)}}>
          M
        </button>
        <div>
          <span className='iconMenuToggle' onClick={() => setMenuVisibility(!menuVisibility)}>&#9776;</span>
          <MenuToggle menuVisibility={menuVisibility} setMenuVisibility={setMenuVisibility} />
        </div>
      </div>
    </header>
  )
}

export default Header;