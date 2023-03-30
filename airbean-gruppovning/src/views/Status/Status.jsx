import React from 'react'
import './Status.css'
import drone from '../../assets/graphics/drone.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../actions/Actiontest'


function Status() {
const navigate = useNavigate();
const dispatch = useDispatch();

const orderNumber  = useSelector((state) => { return state.orderNr })

const orderNumberComponent = orderNumber.map((order, index)=>{
  return (
    <section className='satus__content' key={ index }>
    <p className='status__text'>Ordernummer: {order.orderNr}</p>
    <h3 className='status__title'>Din beställning är på väg!</h3>
    <p>{order.eta} minuter</p>
  </section>
  )
})

  useEffect(()=>{
    async function getTime(){
      const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${orderNumber.orderNr}`);
      const data = await response.json()

    
      console.log(data);
    }
    getTime();
  },[])


  function goToLanding() {
     dispatch(reset())
     navigate('/')
  }

    return (
        <div className='statusBody'>
          <section className='satus__content'>
            {orderNumberComponent}
              {/* <p className='status__text'>Ordernummer: {}</p> */}
              <img className='status__img' src= {drone} alt="image of a black color drone holding a white cup" />
            {/*   <h3 className='status__title'>Din beställning är på väg!</h3>
              <p> minuter</p> */}
              <button className='button button__status'onClick = {goToLanding} >ok, cool!</button>
            </section>
        </div>
  )
}

export default Status;