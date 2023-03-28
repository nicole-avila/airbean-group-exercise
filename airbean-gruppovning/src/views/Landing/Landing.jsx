import './Landing.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Landing() {
  const navigate = useNavigate();


  function goToMenu(){
    navigate('/menu');
  }
    //Backgrounds färgen måste mobil anpassas.. 
    return (
        <div className='landing'>
        <img className='landing__img' src="./src/assets/graphics/intro-graphic-left.svg" alt="" />

        <article className='landing-article' onClick={ goToMenu }>


        <img src="./src/assets/graphics/intro-graphic-left.svg" alt="" />


        <div className='landing-logo'> <img src="./src/assets/graphics/airbean-landing.svg" alt="" /> </div>


        <img src="./src/assets/graphics/intro-graphic-right.svg" alt="" />

          <div className='landing-logo'> <img src="./src/assets/graphics/airbean-landing.svg" alt="" /> </div>
        </article>

        <img className='landing__img' src="./src/assets/graphics/intro-graphic-right.svg" alt="" />
        </div>
  )
}

export default Landing;