import React from 'react'
import './Status.css'
import drone from '../../assets/graphics/drone.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../actions/Actiontest'

function Status() {
const navigate = useNavigate();
const dispatch = useDispatch();
const [saveTime, setSaveTime] = useState();

const orderNumber  = useSelector((state) => { return state.orderNr })
console.log(orderNumber);

  useEffect(()=>{
    async function getTime(){
      const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${orderNumber}`);
      const data = await response.json()
      setSaveTime(data.eta)
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
              <p className='status__text'>Ordernummer: {orderNumber}</p>
              <img className='status__img' src= {drone} alt="image of a black color drone holding a white cup" />
              <h3 className='status__title'>Din beställning är på väg!</h3>
              <p> {saveTime} minuter</p>
              <button className='button button__status'onClick = {goToLanding} >ok, cool!</button>
            </section>
        </div>
  )
}

export default Status;