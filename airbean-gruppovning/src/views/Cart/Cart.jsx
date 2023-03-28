import './Cart.css'
import React from 'react'
import CartComponent from '../../components/Cart-component/CartComponent';
import { useSelector } from 'react-redux';

function Cart() {

    const cart = useSelector((state) => { return state.order })
    console.log(cart)
  
    return (
        <>
            <CartComponent/>
        </>
  )
}

export default Cart;