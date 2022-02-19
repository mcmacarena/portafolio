import React, { Fragment } from 'react';
import './styles/sectionPresentation.css';
import { Slide } from "react-awesome-reveal";

const SectionPresentation = () => {
  return (
    <Fragment>
      <section className='sectionPresentation'>
        <div className='containerTextsPresentation'>
          <Slide delay={100} duration={1500} direction='right' triggerOnce>
            <span className='namePresentation'>
              Soy Macarena Cuevas Guzmán
              </span>
          </Slide>
          <Slide delay={500} duration={1500} direction='right' triggerOnce>
            <span className='especialityPresentation'>
              Ingeniera Civil | Front-end Developer
            </span>
          </Slide>
          <Slide delay={1000} duration={1500} direction='right' triggerOnce>
            <div className='textPresentation'>
              <span className='subtextPresentation'>Estudié un bootcamp intensivo en Laboratoria.</span>
              <span className='subtextPresentation'>Continua bajando para ver mis proyectos!</span>
            </div>
          </Slide>
        </div>
      </section>
    </Fragment >
  )
}

export default SectionPresentation;