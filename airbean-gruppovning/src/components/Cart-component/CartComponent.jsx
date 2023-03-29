import './CartComponent.css';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Status from '../../views/Status/Status';
import { useSelector } from 'react-redux';

function CartComponent(){

   const order  = useSelector((state) => { return state.order})
    const [orderNumber, setOrder] = useState([]);
    
    const orderComponent = order.map((order, index)=>{
    
    return (
        <section className='cart-products' key={index}>
            <h1 className='cart-products-text'  >{order.name}</h1>
            <p className='cart-product-price'>{order.price}kr</p> 
            </section> 
            )

    })
    useEffect(()=>{
        async function getOrder(){
          const body = {
            details: {
              order: order
            }
          }
          const response = await fetch('https://airbean.awesomo.dev/api/beans/order', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json();
          setOrder(data);
        }
        getOrder();
      }, []); 

      let totalP = 0
      function count(){
           order.forEach(order => {
              totalP = totalP + order.price
          });
  
      }
      count()
      console.log(totalP)

      const navigate = useNavigate()
      function sendOrderNr(){

      }

    return(
        <section className='cart'>
            <aside className='cart-triangle-container'>
                <div className='cart-triangle'></div>
            </aside>
            <article className='cart-square'>
                <h1 className='cart-heading'>Din beställning</h1>
              {orderComponent}
                <article className='cart-container-bottom'>
                    <aside className='cart-total-container'>
                        <h2 className='cart-total'>Totalt:<p className='cart-dot'></p><span className='cart-total-price'>{totalP}kr</span></h2>
                    </aside>
                    <p className='cart-moms-text'>inkl moms + drönarleverans</p>
                    <button className='button button__cart' onClick={ sendOrderNr}>Take my money!</button>
                </article>
            </article>
        </section>
    )
}

export default CartComponent;
