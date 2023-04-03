import './Landing.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  function goToMenu(){
    navigate('/menu');
  }
    return (
        <article className='landing-article' onClick={ goToMenu }>
          <img src="./src/assets/graphics/intro-graphic-left.svg"/>
            <div className='landing-logo'> <img src="./src/assets/graphics/airbean-landing.svg"/> </div>
          <img src="./src/assets/graphics/intro-graphic-right.svg" />
        </article> 
  )
}

export default Landing;