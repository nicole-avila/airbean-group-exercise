import './CartComponent.css';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTime, decrease } from '../../actions/Actiontest';

function CartComponent(){
    let [orderComponent, setOrderComponent]= useState([])
    let [getData, setGetData]= useState([])
    let totalPrice = 0
    
    const order  = useSelector((state) => { return state.order})
    const navigate = useNavigate()
    const dispatch = useDispatch();

    function removeCoffe(id){
        dispatch (decrease(id))
    }

   useEffect(() => {
    const orderComponent = order.map((order, index)=>{
        const id = index + 1;
        order.id = id;
 
    return (
        <section className='cart-products' key={id}>
            <article className='cart-products__container'>
            <button onClick={()=> removeCoffe(order.id) } className="remove-btn">X</button><h1 className='cart-products-text'  >{order.name}</h1>
            </article> 
            <p className='cart-product-price'>{order.price}kr</p> 
            </section> 
            )
    })
    setOrderComponent(orderComponent)
    },[order])

    useEffect(()=>{
        if (order.length)
            {
                getOrder()
            }    
                        
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
            setGetData(data.orderNr)
            }
    }, []); 
    
    function count(){
        order.forEach(order => {
            totalPrice = totalPrice + order.price
        });
    }
    count()
    
    function sendOrderNr(){
        dispatch(updateTime(getData));
        navigate('/status')
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
                    <h2 className='cart-total'>Totalt:<p className='cart-dot'></p><span className='cart-total-price'>{totalPrice}kr</span></h2>
                </aside>
                    <p className='cart-moms-text'>inkl moms + drönarleverans</p>
                    <button className='button button__cart' onClick={ sendOrderNr }>Take my money!</button>
                </article>
            </article>
        </section>
    )
}

export default CartComponent;
