import './menuComponent.css'
function MenuComponent(props){

    console.log(props.item)

    return(
        <section className="menu">
            <button>+</button>
            <section className="menu__text">
                
                <section className='menu_titles'>
                    <h1>{props.item.title}</h1>
                    <p>{props.item.price}</p>
                </section>
                <p>Bryggd på månadens bönor</p>

            </section>
            

        </section>
    )
}
export default MenuComponent