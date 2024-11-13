import React from 'react'

export default function Chicago() {
  const styleChicagoSection = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 50%))',
    gridTemplateRows: 'minmax(0, 5vh) minmax(0,5vh) minmax(0,10vh)',
    alignItems: 'start',
    justifyContent: 'center',
    textAlign: 'start',
    padding: '2% 20% 2% 20%',
    marginBottom: '10%'
  }

  const styleChicagoHeader = {
    gridColumn: '1',
    gridRow: '1',
    color: '#495E57',
    fontSize: 'calc(1.5vw + 1.5vh)'
  }
  const styleChicagoHeaderTwo = {
    gridColumn: '1',
    gridRow: '2',
    color: '#495E57',
    fontFamily: "'markazi-text', sans-serif",
    fontSize: 'calc(1.2vw + 1.2vh)',
}

  const styleChicagoText = {
    gridColumn: '1',
    gridRow: '',
    color: '#495E57',
    fontFamily: "'karla', sans-serif",
    fontSize: 'calc(0.8vw + 0.8vh)',
    textAlign:'start',
    paddingRight: '40%',
    paddingTop: '5%'
  }

  const styleChicagoImgOne = {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    transform: 'translate(-20%, 30%)',
    height: 'calc(12vw + 12vh)',
    maxHeight: 'calc(12vw + 12vh)',
    width: 'auto',
    maxWidth: 'auto',
    }

    const styleChicagoImgTwo = {
      gridColumnStart: '2',
      gridColumnEnd: '3',
      gridRowStart: '1',
      gridRowEnd: '2',
      height: 'calc(12vw + 12vh)',
      maxHeight: 'calc(12vw + 12vh)',
      transform: 'translate(60%, 0%)',
      width: 'auto',
      maxWidth: 'auto',
      }

  return (
      <section style={styleChicagoSection}>
        <h1 style={styleChicagoHeader}>Little Lemon</h1>
        <h2 style={styleChicagoHeaderTwo}>Chicago</h2>
        <p style={styleChicagoText}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
        </p>
        <img src={require('../images/img2.jpg')} alt='first img'
          style={styleChicagoImgOne}/>
        <img src={require('../images/img1.jpg')} alt='second img'
          style={styleChicagoImgTwo}/>
      </section>
    )
}
