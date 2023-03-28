import './Cart.css'
import React from 'react'
import CartComponent from '../../components/Cart-component/CartComponent';


function Cart() {

    const [orderNumber, setOrder] = useState([]);
    

    useEffect(()=>{
        async function getOrder(){
          const body = {
            details: {
              order: [
                {
                  name: "Bryggkaffe" ,
                  price: 39
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
      }, []);
    

  
    return (
        <>
         <CartComponent/>
        </>
  )
}

export default Cart;