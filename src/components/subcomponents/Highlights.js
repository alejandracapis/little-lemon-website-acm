import React from 'react';
import YellowButton from './YellowButton';
import Specials from './Specials';

export default function Highlights() {

  const styleHighSection = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0,1fr)',
    gridTemplateRows: '10% 80%',
    alignItems: 'start',
    margin: '5% 20% 10%',
    height: 'auto',
    maxHeight:'auto',
    columnGap: '10%',
    rowGap: '10%'
  }

  const styleHighHeader = {
    gridRow:'1',
    gridColumn:'span 2',
    fontSize: 'calc(1vw + 1.5vh)',
    fontFamily: "'markazi-text', sans-serif"
  }

  return (
    <section
    id='highlights-scroll'
    style={styleHighSection}>
        <h2 style={styleHighHeader}>
          This weeks specials!
        </h2>
        <YellowButton style={{
          gridColumn: '2',
          gridRow: '3'}}
          buttontxt="Order Online"/>
        <Specials
        style ={{gridRow: '2', gridColumn: '1'}}
          imageUrl={require("../images/greek.jpg")} name="Greek Salad"
          dish="Greek Salad"
          price="$ 12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <Specials
        style ={{gridRow: '2', gridColumn: '2'}}
          imageUrl={require("../images/bruchetta.jpg")} name="Bruchetta"
          dish="Bruchetta"
          price="$ 5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <Specials
        style ={{gridRow: '2', gridColumn: '3'}}
          imageUrl={require("../images/lemon_dessert.jpg")} name="Lemon Dessert"
          dish="Lemon Dessert"
          price="$ 5.00"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
    </section>
  )
}
