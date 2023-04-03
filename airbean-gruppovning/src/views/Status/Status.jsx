import './Status.css';
import React, { useEffect, useState } from 'react';
import drone from '../../assets/graphics/drone.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../actions/Actiontest';

function Status() {
  const [saveTime, setSaveTime] = useState();
  const [ifOrderExist, setIfOrderExist] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderNumber = useSelector((state) => { return state.orderNr })

  useEffect(() => {
    async function getTime() {
      const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${orderNumber}`);
      const data = await response.json()
      setSaveTime(data.eta)
    }

    if (orderNumber.length > 0) {
      setIfOrderExist(!ifOrderExist)
      getTime()
    }
  }, [])

  function goToLanding() {
    dispatch(reset())
    navigate('/')
  }

  function backToMenu() {
    navigate('/menu')
  }

  return (
    <div className='statusBody'>
      {ifOrderExist ?
        <section className='satus__content'>
          <p className='status__text'>Ordernummer: {orderNumber}</p>
          <img className='status__img' src={drone} alt="image of a black color drone holding a white cup"/>
          <h3 className='status__title'>Din beställning är på väg!</h3>
          <p> {saveTime} minuter</p>
          <button className='button button__status' onClick={goToLanding} >ok, cool!</button>
        </section> :

        <div className='noOrder'>
          <img className='status__img-upsidedown' src={drone} alt="image of a black color drone holding a white cup"/>
          <p className='noOrder-paragraph'>Du har tyvärr ingen pågående order,<br></br> var god lägg en beställning.</p>
          <button onClick={ backToMenu } className='button button__status'>Tillbaka</button>
        </div>
      }
    </div>
  )
}

export default Status;