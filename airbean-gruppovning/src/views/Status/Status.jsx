import React from 'react'
import './Status.css'
import drone from '../../assets/graphics/drone.svg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reset } from '../../actions/Actiontest'

function Status() {

  const dispatch = useDispatch()

  const location = useLocation()
  let ETA = location.state.orderNumber.eta
  let orderId = location.state.orderNumber.orderNr
  console.log(ETA)
  console.log(orderId)

  const navigate = useNavigate();

  function goToLanding() {
     dispatch(reset())

    navigate('/')
  }

    return (
        <div className='statusBody'>
          <section className='satus__content'>
              <p className='status__text'>Ordernummer: {orderId}</p>
              <img className='status__img' src= {drone} alt="image of a black color drone holding a white cup" />
              <h3 className='status__title'>Din beställning är på väg!</h3>
              <p>{} minuter</p>


              <button className='button button__status'onClick = {goToLanding} >ok, cool!</button>
            </section>
        </div>
  )
}

export default Status;