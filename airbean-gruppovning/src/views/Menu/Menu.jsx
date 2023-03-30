import './Menu.css'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import MenuComponent from '../../components/menuComponent/MenuComponent';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Menu() {
  const [CoffeMenu, setCoffeMenu] = useState([])

  useEffect(()=>{
    async function apiCoffeMeny(){
      const resonse = await fetch('https://airbean.awesomo.dev/api/beans/')
      const  data = await resonse.json()
      setCoffeMenu(data.menu)
    }
    apiCoffeMeny()
  },[]);

  const Menu = CoffeMenu.map((item)=>{
    return <MenuComponent  item = { item} key={ item.id}/>
  })

  return (
      <section className='menu'>
        <Header/>
        <h1 className='menuHeader'>Meny</h1>
        {Menu}
        <Footer/>
      </section>
  )
}

export default Menu