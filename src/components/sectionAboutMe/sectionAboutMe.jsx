import React from 'react';
import './sectionAboutMe.css';
import { Zoom } from "react-awesome-reveal";
import imgMe from '../../img/fotolinkedin_opt.png';
import CV from '../../files/Macarena Cuevas CV 2022.pdf'

const SectionAboutMe = () => {
  return (
    <section className='sectionAboutMe'>
      <section className='sectionAboutMeColour'>
        <div className='containerSectionAboutMe'>
          <p className='titleSection'>SOBRE MÍ</p>
          <div className='contentAboutMe'>
            <section className='containerPhotoText'>
              <div className='containerMyPhoto'>
                <img src={imgMe} alt='' className='myPhoto' />
              </div>
              <div className='textAboutMe'>
                Soy ingeniera Civil y actualmente me encuentro redescubriendo mi pasión por el código. 
                Tengo aptitudes para desarrollarme en distintas áreas y constantemente busco aprendizajes nuevos. 
                Cada desafío que se presenta lo enfrento con ansias de aprender y generar valor desde mis conocimientos.
              </div>
              <div className='textAboutMe'>
                Para conocer más detalles sobre mí, te invito a ver mi CV en el siguiente enlace:
              </div>
              <div className='containerBtnCV'>
                <button className='btnCV' onClick={()=>window.open(CV,'_blank')}>Ver mi CV</button>
              </div>
            </section>
            <section className='containerAllInformation'>
              <div className='containerHabilities'>
                <p className='titleAboutMe'>Mis Habilidades</p>
                <div className='habilities'>
                  <Zoom delay={400} triggerOnce><span className='eachHability'>JAVASCRIPT</span></Zoom>
                  <Zoom delay={700} triggerOnce><span className='eachHability'>HTML</span></Zoom>
                  <Zoom delay={1000} triggerOnce><span className='eachHability'>CSS</span></Zoom>
                  <Zoom delay={1300} triggerOnce><span className='eachHability'>GIT</span></Zoom>
                  <Zoom delay={1600} triggerOnce><span className='eachHability'>REACT</span></Zoom>
                  <Zoom delay={1900} triggerOnce ><span className='eachHability'>FIREBASE</span></Zoom>
                  <Zoom delay={2200} triggerOnce ><span className='eachHability'>REACT NATIVE</span></Zoom>
                  <Zoom delay={2500} triggerOnce ><span className='eachHability'>NODE.JS</span></Zoom>
                  <Zoom delay={2800} triggerOnce ><span className='eachHability'>BURPSUITE</span></Zoom>
                </div>
              </div>
              <div className='containerCompetence'>
                <p className='titleAboutMe'>Mis Competencias</p>
                <div className='competences'>
                  <Zoom delay={400} triggerOnce><span className='eachCompetence'>AUTOAPRENDIZAJE</span></Zoom>
                  <Zoom delay={700} triggerOnce><span className='eachCompetence'>LIDERAZGO</span></Zoom>
                  <Zoom delay={1000} triggerOnce><span className='eachCompetence'>HABILIDAD COMUNICATIVA</span></Zoom>
                  <Zoom delay={1000} triggerOnce><span className='eachCompetence'>ADAPTABILIDAD</span></Zoom>
                  <Zoom delay={1300} triggerOnce><span className='eachCompetence'>CAPACIDAD ANALÍTICA</span></Zoom>
                  <Zoom delay={1600} triggerOnce><span className='eachCompetence'>TRABAJO EN EQUIPO</span></Zoom>
                  <Zoom delay={1900} triggerOnce><span className='eachCompetence'>HABILIDAD RESOLUTIVA</span></Zoom>
                </div>
              </div>
              <div className='containerKnowledge'>
                <p className='titleAboutMe'>Mis Conocimientos</p>
                <div className='knowledges'>
                  <Zoom delay={400} triggerOnce><span className='eachKnowledge'>INGLÉS INTERMEDIO</span></Zoom>
                  <Zoom delay={700} triggerOnce><span className='eachKnowledge'>SCRUM</span></Zoom>
                  <Zoom delay={1000} triggerOnce><span className='eachKnowledge'>EXCEL AVANZADO</span></Zoom>
                  <Zoom delay={1300} triggerOnce><span className='eachKnowledge'>TRELLO</span></Zoom>
                  <Zoom delay={1600} triggerOnce><span className='eachKnowledge'>FIGMA</span></Zoom>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  )
}

export default SectionAboutMe