import './iconCart.css'
import image from '../../assets/graphics/bag.svg';
import { useSelector } from 'react-redux';

function IconCart(){
    const order  = useSelector((state) => { return state.order})
    const length = order.length;

    

    return(
        <section className="IconBox">
            <article className="IconBox__number">{length}</article>
            <article className="IconBox__icon"><img src={image} alt="" /></article>
        </section>
    )
}
export default IconCart