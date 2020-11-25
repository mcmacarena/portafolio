import React from 'react';
import './styles/sectionProjects.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import LolPickUpDesktop from '../img/leaguePickupDesktop.png';
import LolPickupMobile from '../img/leaguePickupMobile.png';
import barkifyDesktop from '../img/barkifyDesktop.png';
import barkifyMobile from '../img/barkifyMobile.png';
import cptDesktop from '../img/comidaparatodosDesktop.png';
import cptMobile from '../img/comidaparatodosMobile.png';
import retroburgerDesktop from '../img/retroburgerDesktop.png';
import retroburgerTablet from '../img/retroburgerTablet.png';

const SectionProjects = () => {

  const buttonControls =window.screen.width<1009? true: false;

  return (
    <section className='sectionProjects'>
      <div className='containerSectionProjects'>
        <p className='titleSection'>PROYECTOS</p>
        {/* data lovers */}
        <div className='eachProject'>
          <div className='containerPhotoDesktop'>
            <AliceCarousel disableDotsControls disableButtonsControls={buttonControls} autoPlay infinite autoPlayInterval='3000'>
              <img src={LolPickUpDesktop} alt='' className='photoDesktop' />
              <img src={LolPickupMobile} alt='' className='photoDesktop' />
            </AliceCarousel>
          </div>
          <div className='containerTextProject'>
            <span className='titleProject'>League Pickup</span>
            <span className='infoProject'>WebApp que muestra personajes del juego League Of Legends y permite al usuario interacturar
            a través de filtros.</span>
            <span className='infoProject'>Al clickear se muestra información más detallada a través de un modal.</span>
            <span className='sourcesProject'>JAVASCRIPT - CSS - HTML </span>

            <div className='containerBtnProjects'>
              <a className='containerBtnWidth' href='https://mcmacarena.github.io/SCL014-data-lovers/src/' target='b'>
                <button className='btnProject'>WebApp</button>
              </a>
              <a className='containerBtnWidth' href='https://github.com/mcmacarena/SCL014-data-lovers' target='a'>
                <button className='btnProject'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
        {/* social network */}
        <div className='eachProject'>
          <div className='containerPhotoDesktop'>
            <AliceCarousel disableDotsControls disableButtonsControls={buttonControls} autoPlay infinite autoPlayInterval='3000'>
              <img src={barkifyDesktop} alt='' className='photoDesktop' />
              <img src={barkifyMobile} alt='' className='photoDesktop' />
            </AliceCarousel>
          </div>
          <div className='containerTextProject'>
            <span className='titleProject'>Barkify</span>
            <span className='infoProject'> Red social creada con el propósito de generar interacción entre perros que se
            encuentren geográficamente cerca y presenten afinidades.</span>
            <span className='infoProject'> Se puede dar like, ver otros perfiles, comentar y guardar perritos.</span>
            <span className='sourcesProject'>JAVASCRIPT - CSS - HTML - FIREBASE </span>
            <div className='containerBtnProjects'>
              <a className='containerBtnWidth' href='https://mcmacarena.github.io/SCL014-social-network/' target='d'>
                <button className='btnProject'>WebApp</button>
              </a>
              <a className='containerBtnWidth' href='https://github.com/mcmacarena/SCL014-social-network/' target='c'>
                <button className='btnProject'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
        {/* burger queen */}
        <div className='eachProject'>
          <div className='containerPhotoDesktop'>
            <AliceCarousel disableDotsControls disableButtonsControls={buttonControls} autoPlay infinite autoPlayInterval='3000'>
              <img src={retroburgerDesktop} alt='' className='photoDesktop' />
              <img src={retroburgerTablet} alt='' className='photoDesktop' />
            </AliceCarousel>
          </div>
          <div className='containerTextProject'>
            <span className='titleProject'>Retro Burger</span>
            <span className='infoProject'>WebApp interna de un restaurant llamado Retro Burguer, creada para la interacción del mesero con el cocinero
            que funciona simultaneamente. </span>
            <span className='sourcesProject'> REACT - CSS - FIREBASE </span>
            <div className='containerBtnProjects'>
              <a className='containerBtnWidth' href='https://retro-burger-2.firebaseapp.com/' target='f'>
                <button className='btnProject'>WebApp</button>
              </a>
              <a className='containerBtnWidth' href='https://github.com/mcmacarena/retro-burger' target='e'>
                <button className='btnProject'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
        {/* comida para todos */}
        <div className='eachProject'>
          <div className='containerPhotoDesktop'>
            <AliceCarousel disableDotsControls disableButtonsControls={buttonControls} autoPlay infinite autoPlayInterval='3000'>
              <img src={cptDesktop} alt='' className='photoDesktop' />
              <img src={cptMobile} alt='' className='photoDesktop' />
            </AliceCarousel>
          </div>
          <div className='containerTextProject'>
            <span className='titleProject'>Comida para todos</span>
            <span className='infoProject'>Propuesta de web para fundación "Comida para todos", entidad benéfica para 
            combatir el hambre a través de diversas donaciones.</span>
            <span className='sourcesProject'>REACT - CSS - FIREBASE </span>
            <div className='containerBtnProjects'>
              <a className='containerBtnWidth' href='https://comida-para-todos-28f10.web.app/' target='h'>
                <button className='btnProject'>WebApp</button>
              </a>
              <a className='containerBtnWidth' href='https://github.com/mcmacarena/comida-para-todos' target='g'>
                <button className='btnProject'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default SectionProjects;


