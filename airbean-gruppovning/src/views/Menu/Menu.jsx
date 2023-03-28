import './Menu.css'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import MenuComponent from '../../components/menuComponent/MenuComponent';
import Footer from '../../components/footer/Footer';
// import { useNavigate } from 'react-router-dom';

function Menu() {
  // const navigate = useNavigate();

  const [CoffeMenu, setCoffeMenu] = useState([])

      useEffect(()=>{
        async function apiCoffeMeny(){
          const resonse = await fetch('https://airbean.awesomo.dev/api/beans/')
          const  data = await resonse.json()
          console.log(data.menu)
          setCoffeMenu(data.menu)
         
        }
        apiCoffeMeny()
    },[]);

    // function navigateToNav(){
    //   navigate('/nav');
    // }

     const Menu = CoffeMenu.map((item)=>{
       return <MenuComponent  item = { item} key={ item.id}/>
     })
  
    return (
        <section className='menu'>
          <h1 className='menuHeader'>Meny</h1>
          {Menu}
          <Footer/>
        </section>
  )
}

export default Menu