import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const styleHeroSection = {
    backgroundColor: '#495E57',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 50%))',
    gridTemplateRows: 'minmax(0, 5vh) minmax(0,5vh) minmax(0,10vh) minmax(0,10vh)',
    alignItems: 'start',
    justifyContent: 'center',
    textAlign: 'start',
    padding: '2% 20% 2% 30%',
    marginBottom: '10%'
  }

  const styleHeroHeader = {
    gridColumn: '1',
    gridRow: '1',
    color: '#F4CE14',
    fontSize: 'calc(1.5vw + 1.5vh)',
    fontFamily: "'markazi-text', sans-serif"

  }
  const styleSecondHeader = {
    gridColumn: '1',
    gridRow: '2',
    color: '#EDEFEE',
    fontFamily: "'markazi-text', sans-serif",
    fontSize: 'calc(1.2vw + 1.2vh)',
}

  const styleHeroText = {
    gridColumn: '1',
    gridRow: '',
    color: '#EDEFEE',
    fontFamily: "'karla', sans-serif",
    fontSize: 'calc(0.8vw + 0.8vh)',
    textAlign:'start',
    paddingRight: '40%',
    paddingTop: '5%'
  }

  const styleHeroImg = {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '4',
    height: 'calc(18vw + 18vh)',
    maxHeight: 'calc(18vw + 18vh)',
    width: 'auto',
    maxWidth: 'auto',
    borderRadius: '3vh',
    marginBottom: '10vh'
    }

    const styleHeroBtn = {
      backgroundColor: '#F4CE14',
      border: 'none',
      borderRadius: '0.6vh',
      textAlign: 'center',
      justifySelf: 'start',
      fontFamily: '"karla", sans-serif',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 'calc(0.7vw + 0.5vh)',
      width: 'calc(5vw + 5vh)',
      height: 'calc(1.5vw + 1.5vh)',
      gridColumn: '1',
      gridRow: '5'
    }

  return (
    <section style={styleHeroSection}>
      <h1 style={styleHeroHeader}>Little Lemon</h1>
      <h2 style={styleSecondHeader}>Chicago</h2>
      <p style={styleHeroText}>We are a family owned
        Mediterranean restaurant,
        focused on traditional
        recipies served within a modern
        twist.
      </p>
      <button
      id='buttonHero'
      type='button'
      style={styleHeroBtn}
      onClick={() => navigate("/booking")}>
        Book a table
      </button>
      <img src={require('../images/waiter.jpg')} alt='main img'
        style={styleHeroImg}/>
    </section>
    );
};
