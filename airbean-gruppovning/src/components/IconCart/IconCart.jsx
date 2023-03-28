import './iconCart.css'
import image from '../../assets/graphics/bag.svg'

function IconCart(){

    return(
        <section className="IconBox">
            <article className="IconBox__number">7</article>
            <article className="IconBox__icon"><img src={image} alt="" /></article>
        </section>
    )
}
export default IconCart