import React from 'react';
import './styles/sectionContact.css';
import dog from '../img/perrito.png';
import gmail from '../img/gmail.png';
import linkedin from '../img/linkedin.png'

const SectionContact = () => {
  return (
    <section className='sectionContact'>
      <div className='containerContact'>
        <p className='titleSection'>CONTÁCTAME</p>
        <div className='contentContactMe'>
          <section className='containerDogText'>
            <div className='containerPhotoDog'>
              <img src={dog} alt='' className='photoDog' />
            </div>
            <div className='textContact'>
              Si te gustó lo que viste o tienes alguna inquietud, no dudes en contactarme por cualquiera de estos medios:
            </div>
            <div className='containerMailLinkedin'>
              <a className='containerMail' href='https://mail.google.com/mail/?view=cm&fs=1&to=macarenacuevasg@gmail.com' target='i'>
                <div className='iconEmail'>
                  <img src={gmail} alt='' className='photoGmail' />
                </div>
                <div className='textEmail'>
                  EMAIL:
                </div>
                <div className='myEmail'>
                  macarenacuevasg@gmail.com
                </div>
              </a>
              <a className='containerLinkedin' href='https://www.linkedin.com/in/macarenacuevasg/' target='j'>
                <div className='iconLinkedin'>
                  <img src={linkedin} alt='' className='photoLinkedin' />
                </div>
                <div className='textLinkedin'>
                  LINKEDIN:
                </div>
                <div className='myLinkedin'>
                  <p className='linkLinkedin'>macarenacuevasg</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default SectionContact