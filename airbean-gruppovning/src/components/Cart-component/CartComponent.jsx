import './CartComponent.css';

function CartComponent(){

    return(
        <section className='cart'>
            <aside className='cart-triangle-container'>
                <div className='cart-triangle'></div>
            </aside>
            <article className='cart-square'>
                <h1 className='cart-heading'>Din beställning</h1>
            <aside className='cart-products'>
                <h1 className='cart-products-text'>Bryggkaffe</h1>
                <p className='cart-product-price'>49kr</p>
                <h1 className='cart-products-text'>Caffé Doppio</h1>
                <p className='cart-product-price'>49kr</p>
                </aside>
                <article className='cart-container-bottom'>
                    <aside className='cart-total-container'>
                        <h2 className='cart-total'>Totalt:<p className='cart-dot'></p><span className='cart-total-price'>88kr</span></h2>
                    </aside>
                    <p className='cart-moms-text'>inkl moms + drönarleverans</p>
                    <button className='button button__cart'>Take my money!</button>
                </article>
            </article>
        </section>
    )
}

export default CartComponent;
