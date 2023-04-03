import './Header.css'
import IconCart from '../IconCart/IconCart';
import CartComponent from '../Cart-component/CartComponent';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate()

function handleCart() {
  setIsCartOpen(!isCartOpen);
}

function openNav(){
  navigate('/nav')
}
  return (
        <> 
          <header className='main-header'>
            <div className='roundbox' onClick={ openNav }> 
              <img src="../../../src/assets/graphics/navicon.svg" alt="" />
            </div>
            <article className='iconCart' onClick={handleCart}>
              <IconCart />
            </article>
          </header>
            {isCartOpen ? <CartComponent/> : null}
        </>
  )
}

export default Header;