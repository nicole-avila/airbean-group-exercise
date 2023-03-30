import './Nav.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  function goToMenu(){
    navigate('/menu')
  }
  function goToAbout(){
    navigate('/about')
  }
  function goToStatus(){
    navigate('/status')
  }
  function goBack(){
    navigate(-1);
  }
      return (
        <>
        <article className='nav-article'>
        <header className='nav-header'> 
        <div onClick= { goBack } className='roundbox'><img className='cross' src="./src/assets/graphics/close.svg" alt="cross" /></div>
        </header>

        <section className='nav-section'>
          <ul>
            <li onClick= { goToMenu }>Meny</li>
            <hr />
            <li onClick={ goToAbout }>Vårt Kaffe</li>
            <hr />
            <li onClick= { goToStatus }>Orderstatus</li>
            <hr />
          </ul>
        </section>
        </article>
        </>
  )
}

export default Nav;