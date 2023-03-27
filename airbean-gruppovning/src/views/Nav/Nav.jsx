import './Nav.css'
import React from 'react'

function Nav() {
  
    return (
        <>
        <article className='nav-article'>
        <header className='nav-header'> 
        <div className='roundbox'><img className='cross' src="./src/assets/graphics/close.svg" alt="cross" /></div>
        </header>

        <section className='nav-section'>

        <ul>
          <li>Meny</li>
          <hr />
          <li>Vårt Kaffe</li>
          <hr />
          <li>Orderstatus</li>
          <hr />
        </ul>

        </section>

        </article>
        </>
  )
}

export default Nav;