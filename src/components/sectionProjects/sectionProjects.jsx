import React from 'react';
import '../sectionProjects/styles/sectionProjects.css'
import LolPickUpDesktop from '../../img/leaguePickupDesktop.png';
import LolPickupMobile from '../../img/leaguePickupMobile.png';
import barkifyDesktop from '../../img/barkifyDesktop.png';
import barkifyMobile from '../../img/barkifyMobile.png';
import cptDesktop from '../../img/comidaparatodosDesktop.png';
import cptMobile from '../../img/comidaparatodosMobile.png';
import tictactoe1 from '../../img/mockupTictactoe1.png';
import tictactoe2 from '../../img/mockupTictactoe2.png';
import SectionProjectsEachOne from '../sectionProjects/sectionProjectsEachOne'
import SectionProjectsCarousel from './sectionProjectsCarousel'

const SectionProjects = () => {

  return (
    <section className='sectionProjects'>
      <div className='containerSectionProjects'>
        <p className='titleSection'>PROYECTOS</p>
        {/* data lovers */}
        <div className='eachProject'>
          <SectionProjectsCarousel
            img1={LolPickUpDesktop}
            img2={LolPickupMobile}>
          </SectionProjectsCarousel>
          <SectionProjectsEachOne
            titleProject={'League Pickup'}
            infoProject1={'WebApp que muestra personajes del juego League Of Legends y permite al usuario interactuar a través de filtros.'}
            infoProject2={'Al clickear se muestra información más detallada a través de un modal.'}
            sourcesProject={'JAVASCRIPT - CSS - HTML '}
            hrefWebApp={'https://mcmacarena.github.io/SCL014-data-lovers/src/'}
            hrefGithub={'https://github.com/mcmacarena/SCL014-data-lovers'}
          ></SectionProjectsEachOne>
        </div>
        {/* social network */}
        <div className='eachProject'>
          <SectionProjectsCarousel
            img1={barkifyDesktop}
            img2={barkifyMobile}>
          </SectionProjectsCarousel>
          <SectionProjectsEachOne
            titleProject={'Barkify'}
            infoProject1={'Red social creada con el propósito de generar interacción entre perros que se encuentren geográficamente cerca y presenten afinidades.'}
            infoProject2={'Se puede dar like, ver otros perfiles, comentar y guardar perritos.'}
            sourcesProject={'JAVASCRIPT - CSS - HTML - FIREBASE '}
            hrefWebApp={'https://mcmacarena.github.io/SCL014-social-network/'}
            hrefGithub={'https://github.com/mcmacarena/SCL014-social-network/'}
          ></SectionProjectsEachOne>
        </div>
        {/* comida para todos */}
        <div className='eachProject'>
          <SectionProjectsCarousel
            img1={cptDesktop}
            img2={cptMobile}>
          </SectionProjectsCarousel>
          <SectionProjectsEachOne
            titleProject={'Comida para todos'}
            infoProject1={'Propuesta de web para fundación "Comida para todos", entidad benéfica para combatir el hambre a través de diversas donaciones.'}
            sourcesProject={'REACT - CSS - FIREBASE '}
            hrefWebApp={'https://comida-para-todos-28f10.web.app/'}
            hrefGithub={'https://github.com/mcmacarena/comida-para-todos'}
          ></SectionProjectsEachOne>
        </div>
        {/* tic-tac-toe */}
        <div className='eachProject'>
          <SectionProjectsCarousel
            img1={tictactoe1}
            img2={tictactoe2}>
          </SectionProjectsCarousel>
          <SectionProjectsEachOne
            titleProject={'Christmas Tic-tac-toe'}
            infoProject1={'Aplicación creada para Android para jugar al tic-tac-toe en un ambiente inspirado en la festividad de Navidad'}
            sourcesProject={'REACT NATIVE - EXPO'}
            hrefWebApp={'https://appetize.io/embed/rrter8mmfw3pddh6dw4jtrc6m4?device=pixel4&scale=75&orientation=portrait&osVersion=10.0'}
            hrefGithub={'https://github.com/mcmacarena/tic-tac-toe'}
          ></SectionProjectsEachOne>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;