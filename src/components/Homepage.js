import React from 'react'
import Highlights from './subcomponents/Highlights';
import Testimonials from './subcomponents/Testimonials';
import About from './subcomponents/About';
import Hero from './subcomponents/Hero';

export default function Homepage() {
  const styleHomepage = {
    display: 'grid',
    gridTemplateRows: 'repeat(4,minmax(0,auto)',
    justifyContent: 'center',
    paddingBottom: '10%'
  };

  return (
    <section style={styleHomepage}>
      <Hero id="hero"/>
      <Highlights id="highlights" />
      <Testimonials id="testimonials" />
      <About id="about" />
    </section>
  );
};
