import './Landing.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Landing() {

    const navigate = useNavigate()

  function handleClick(){
    navigate('/menu')
  }

    return (
        <>

        <article onClick={handleClick} className='landing-article'>

        <img src="./src/assets/graphics/intro-graphic-left.svg" alt="" />


        <div className='landing-logo'> <img src="./src/assets/graphics/airbean-landing.svg" alt="" /> </div>


        <img src="./src/assets/graphics/intro-graphic-right.svg" alt="" />

        </article>

        </>
  )
}

export default Landing;