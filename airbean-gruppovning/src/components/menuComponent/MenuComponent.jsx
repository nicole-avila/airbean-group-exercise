import './menuComponent.css'
import Addbutton from '../../assets/graphics/add.svg'
function MenuComponent(props){

    console.log(props.item)

    return(
        <section className="menu">
            
            <section className="menu__text">
                
                <section className='menu_titles'>
                    <article> <img src={Addbutton} alt="add"  className='menu__img'/> </article>
                    <h1>{props.item.title}</h1>
                    <p>{props.item.price}</p>
                </section>
                <p>Bryggd på månadens bönor</p>

            </section>
            

        </section>
    )
}
export default MenuComponent