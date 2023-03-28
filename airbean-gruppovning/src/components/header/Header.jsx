import './Header.css'
import React from 'react'
import IconCart from '../IkonCart/IkonCart';

function Header() {
  return (
        <> 
        
        <header className='main-header'>
        <div className='roundbox'> <img src="../../../src/assets/graphics/navicon.svg" alt="" /></div>
          <article className='iconCart'>
            <IconCart/>
          </article>
        
        </header>
        </>
  )
}

export default Header;