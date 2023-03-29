import React from 'react'
import './Status.css'
import drone from '../../assets/graphics/drone.svg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Status() {
  const navigate = useNavigate();
  const location = useLocation();

  //let ETA = location.state.orderNumber.eta
  let orderId = location.state.orderNumber.orderNr
  let [time, setTime] = useState();

  //console.log(ETA)
  console.log(orderId)

  useEffect(()=>{
    async function getTime(){
      const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${orderId}`);
      const data = await response.json()
     
      setTime(data.eta)
      console.log(data.eta)
    }
    getTime();
  },[])


  function goToLanding() {
    navigate('/')
  }

    return (
        <div className='statusBody'>
          <section className='satus__content'>
              <p className='status__text'>Ordernummer: {orderId}</p>
              <img className='status__img' src= {drone} alt="image of a black color drone holding a white cup" />
              <h3 className='status__title'>Din beställning är på väg!</h3>
              <p>{time} minuter</p>


              <button className='button button__status'onClick = {goToLanding} >ok, cool!</button>
            </section>
        </div>
  )
}

export default Status;