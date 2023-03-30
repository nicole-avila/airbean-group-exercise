import './Header.css'
import React from 'react'
import IconCart from '../IconCart/IconCart';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../Cart-component/CartComponent';
import { useState } from 'react';

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
          <div className='roundbox' onClick={ openNav }> <img src="../../../src/assets/graphics/navicon.svg" alt="" /></div>
          <article className='iconCart' onClick={handleCart}>
            <IconCart />
          </article>
        </header>
        {isCartOpen ? <CartComponent/> : null}
        </>
  )
}

export default Header;