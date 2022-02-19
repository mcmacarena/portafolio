import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const SectionProjectsCarousel = (props) => {

  const buttonControls = window.screen.width < 1009 ? true : false;

  return (
    <div className='containerPhotoDesktop'>
      <AliceCarousel disableDotsControls disableButtonsControls={buttonControls} autoPlay infinite autoPlayInterval='3000'>
        <img src={props.img1} alt='' className='photoDesktop' />
        <img src={props.img2} alt='' className='photoDesktop' />
      </AliceCarousel>
    </div>
  );
}

export default SectionProjectsCarousel;