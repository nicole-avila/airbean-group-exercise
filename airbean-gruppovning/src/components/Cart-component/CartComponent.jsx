import './CartComponent.css';

function CartComponent(){

    return(
        <section>Cart Component
            <aside className='cart-triangle-container'>
                <div className='cart-triangle'></div>
            </aside>
            <article className='cart-square'>
                <h1>Din beställning</h1>

                <h2>Totalt:</h2>
                <p>inkl moms + drönarleverans</p>
                <button>Take my money!</button>
            </article>
        </section>
    )
}

export default CartComponent;
