import './Header.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Header() {

const navigate = useNavigate()

function openNav(){

  navigate('/nav')

}

  return (
        <>

        <header className='main-header'>
        <div className='roundbox' onClick={ openNav }> <img src="../../../src/assets/graphics/navicon.svg" alt="" /></div>
        </header>
        </>
  )
}

export default Header;