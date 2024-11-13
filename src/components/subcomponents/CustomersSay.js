import React from 'react';

export default function CustomersSay({rating, nameprofile, reviewtxt, imgUrl}) {
  const ratingHeader = {
      color: 'black',
      fontFamily: "'karla', sans-serif",
      fontSize: 'calc(0.5vw + 0.8vh)',
      fontWeight: 'bolder',
      alignSelf:'end',
      gridColumn: 'span 2',
      gridRow: '1'
  }

  const ratingHeaderTwo = {
    color: 'black',
    fontFamily: "'karla', sans-serif",
    fontSize: 'calc(0.5vw + 0.8vh)',
    fontWeight: 'bolder',
    alignSelf:'center',
    gridColumn: '2',
    gridRow: '2',
    justifySelf: 'start'
}

  const styleCustomersSay = {
    display: 'grid',
    gridTemplateRows: '1fr 2fr 1fr',
    gridTemplateColumns: 'repeat(2, minmax(0, 50%))',
    rowGap: '5%',
    backgroundColor: '#EDEFEE',
    padding:'8%'
  }

  const styleImgCustomer = {
    height: 'calc(3vw + 3vh)',
    maxHeight: 'calc(3vw + 3vh)',
    backgroundColor: 'grey',
    opacity: '0.8',
    textAlign: 'center',
    gridColumn: '1',
    gridRow: '2'
  }

  const styleCustomerTxt = {
    fontFamily: "'karla', sans-serif",
    fontSize: 'calc(0.5vw + 0.8vh)',
    gridColumn: 'span 2',
    gridRow: '3'
  }

  return (
      <section style={styleCustomersSay}>
        <h4 style={ratingHeader}>Rating: {rating}&#11088;</h4>
          <img
          src={imgUrl}
          alt='img'
          style={styleImgCustomer}/>
        <h4 style={ratingHeaderTwo}>{nameprofile}</h4>
        <p style={styleCustomerTxt}>{reviewtxt}</p>
      </section>
  )
}
