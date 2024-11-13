import React from 'react';
import CustomersSay from '../subcomponents/CustomersSay';

export default function Testimonials() {
const styleTestimonialsHeader = {
  gridColumnEnd: 'span 4',
  textAlign: 'center',
  fontSize: '36px',
  fontWeight: 'lighter',
  marginBottom: '2%',
  color: '#EDEFEE',
  fontFamily: "'markazi-text', sans-serif" }

  const styleTestimonialsSection = {
    display: 'grid',
    gridTemplateRows: 'minmax(0,1fr) minmax(0,2fr)',
    gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
    gap: '7%',
    justifyContent: 'center',
    padding:'5% 10%',
    backgroundColor: '#495E57',
    width:'100%' }

  return (
      <section
      style={styleTestimonialsSection}>
        <h1 style={styleTestimonialsHeader}>Testimonials</h1>
        <CustomersSay
        imgUrl={require('../images/profile1.jpg')}
          rating="5"
          nameprofile="Emilio"
          reviewtxt="I like having dinner with my friends here!"
        />
        <CustomersSay
        imgUrl={require('../images/profile2.jpg')}
          rating="5"
          nameprofile="Bertha"
          reviewtxt="The best place for family reunions." />
        <CustomersSay
        imgUrl={require('../images/profile3.jpg')}
          rating="5"
          nameprofile="Tatiana"
          reviewtxt="The best birthday party ever!" />
        <CustomersSay
        imgUrl={require('../images/profile4.jpg')}
          rating="5"
          nameprofile="Lion"
          reviewtxt="It's great for a romantic dinner!" />
      </section>
  )
}
