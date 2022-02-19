import React from 'react';
import './styles/sectionContact.css';
import dog from '../img/perrito.png';
import gmail from '../img/gmail.png';
import linkedin from '../img/linkedin.png'

const SectionContact = () => {

  const copyMail = (mail) => {
    let auxiliaryElement = document.createElement('textarea');
    document.body.appendChild(auxiliaryElement);
    auxiliaryElement.value = mail;
    auxiliaryElement.select();
    document.execCommand("copy");
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Correo copiado! ";
    document.body.removeChild(auxiliaryElement);
  }


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
              <div className='tooltip' >
                <span className='tooltiptext' id='myTooltip'>Copiar correo</span>
                <div className='containerMail' onClick={() => copyMail('macarena.cuevas.g@gmail.com')}>
                  <div className='iconEmail'>
                    <img src={gmail} alt='' className='photoGmail' />
                  </div>
                  <div className='textEmail'>
                    EMAIL:
                </div>
                  <div className='myEmail'>
                    macarena.cuevas.g@gmail.com
                </div>
                </div>
              </div>
              <a className='containerLinkedin' href='https://www.linkedin.com/in/macarenacuevasg/' target='i'>
                <div className='iconLinkedin'>
                  <img src={linkedin} alt='' className='photoLinkedin' />
                </div>
                <div className='textLinkedin'>
                  LINKEDIN:
                </div>
                <div className='myLinkedin'>
                  <p>macarenacuevasg</p>
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