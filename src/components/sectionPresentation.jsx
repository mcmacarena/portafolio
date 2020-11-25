import React, { Fragment } from 'react';
import './styles/sectionPresentation.css';

const SectionPresentation = () => {
  return (
    <Fragment>
      <section className='sectionPresentation'>
        <div className='containerTextsPresentation'>
          <div className='namePresentation'>
            Soy Macarena Cuevas
          </div>
          <div className='especialityPresentation'>
            Front-end Developer
          </div>
          <div className='textPresentation'>
            <span className='subtextPresentation'>Estudié un bootcamp intensivo en Laboratoria.</span>
            <span className='subtextPresentation'>Continua bajando para ver mis proyectos!</span>
          </div>
        </div>
      </section>
    </Fragment >
  )
}

export default SectionPresentation;