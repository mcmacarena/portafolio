import React from 'react';
import './styles/menuToggle.css';
import { Link } from 'react-scroll';

const MenuToggle = (props) => {
  // const scrollQueHacemos= window.screen.width<1024 ? 2050 : 2000;
  // const scrollTransparencia= window.screen.width<1024 ? 3420 : 3150;

  const classToogle = props.menuVisibility === true ? 'toggleVisible' : 'toggleHidden'

  return (
    <div className={classToogle}>
      <Link to="sectionProject" smooth={true}>
        <div className='eachContainerMenuToggle' onClick={() => { props.setMenuVisibility(!props.menuVisibility) }} >
          Proyectos
        </div>
      </Link>
      <Link to="sectionAboutMe" smooth={true}>
        <div className='eachContainerMenuToggle' onClick={() => { props.setMenuVisibility(!props.menuVisibility) }}>
          Sobre mí
        </div>
      </Link>
      <Link to="sectionContact" smooth={true}>
        <div className='eachContainerMenuToggle' onClick={() => { props.setMenuVisibility(!props.menuVisibility) }}>
          Contáctame
        </div>
      </Link>
    </div>
  );
}

export default MenuToggle;


