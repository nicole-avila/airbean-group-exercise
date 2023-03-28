import './About.css'
import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function About() {
  
    return (
        <>

        <article className='about-article'>
        <Header />
        <section className='about-section'>

        <h1 className='about-heading'>Vårt Kaffe</h1>

        <h2 className='about-subheading'>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</h2>
        
        <p className='about-paragraph'>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
        
        <p className='about-paragraph'>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>

        <aside className='about-aside'> 
        <img className='persona' src="../../../src/assets/graphics/eva-cortado.jpg" alt="" />
        <h1 className='about-name'>Eva Cortado</h1>
        <h1 className='about-work'>VD & Grundare</h1>
        </aside>
        </section>

        </article>

        </>
  )
} 

export default About;