import React from 'react';
import '../sectionProjects/styles/sectionProjects.css'

const SectionProjectsEachOne = (props) => {

  return (
    <div className='containerTextProject'>
      <span className='titleProject'>{props.titleProject}</span>
      <span className='infoProject'>{props.infoProject1}.</span>
      <span className='infoProject'>{props.infoProject2}</span>
      <span className='sourcesProject'>{props.sourcesProject}</span>

      <div className='containerBtnProjects'>
        <a className='containerBtnWidth' href={props.hrefWebApp} target='b'>
          <button className='btnProject'>WebApp</button>
        </a>
        <a className='containerBtnWidth' href={props.hrefGithub} target='a'>
          <button className='btnProject'>GitHub</button>
        </a>
      </div>
    </div>
  )}

export default SectionProjectsEachOne;


