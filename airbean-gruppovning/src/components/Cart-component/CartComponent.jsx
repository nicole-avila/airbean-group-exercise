import './CartComponent.css';
import React from 'react'
/* import { useState } from 'react';
import { useEffect } from 'react';
import Status from '../Status/Status';
import { useLocation } from 'react-router-dom'; */


function CartComponent(){

    /* const cofeItem = useLocation((state) => { return state.order })



    const [orderNumber, setOrder] = useState([]);
    console.log(orderNumber)

    const SendOrderNrToStatus = orderNumber.map((number)=>{
        return < Status orderNumber = { number } />

    })

    useEffect(()=>{
        async function getOrder(){
          const body = {
            details: {
              order: [
                {
                  name: "Bryggkaffe" , //lägg in variabel från reduc?
                  price: 39            // lägg in variabel från reduc
                }
              ]
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
      }, []); */

    return(
        <section className='cart'>Cart Component
            <aside className='cart-triangle-container'>
                <div className='cart-triangle'></div>
            </aside>
            <article className='cart-square'>
                <h1 className='cart-heading'>Din beställning</h1>
            <aside className='cart-products'>
                <h1 className='cart-products-text'>Bryggkaffe</h1>
                <p className='cart-product-price'>49kr</p>
                <h1 className='cart-products-text'>Caffé Doppio</h1>
                <p className='cart-product-price'>49kr</p>
                </aside>
                <article className='cart-container-bottom'>
                    <aside className='cart-total-container'>
                        <h2 className='cart-total'>Totalt:<p className='cart-dot'></p><span className='cart-total-price'>88kr</span></h2>
                    </aside>
                    <p className='cart-moms-text'>inkl moms + drönarleverans</p>
                    <button className='button button__cart'>Take my money!</button>
                </article>
            </article>
        </section>
    )
}

export default CartComponent;
