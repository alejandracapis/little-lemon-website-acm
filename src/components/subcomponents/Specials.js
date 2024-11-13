import React from 'react';

export default function Specials ({ imageUrl, name, dish, price, description }) {
  const styleSpecials = {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto repeat(4,minmax(0, 1fr))',
    gridTemplateColumns: '80% 20%',
    backgroundColor: '#EDEFEE',
    borderTopLeftRadius: '5%',
    borderTopRightRadius: '5%',
    alignItems: 'center',
    justifyItems: 'start',
  }

  const styleDishImg = {
    gridColumn: '1/ span 2',
    gridRow: '1',
    height: 'calc(8vw + 8vh)',
    width: 'auto',
    maxWidth: '100%',
    borderTopLeftRadius: '5%',
    borderTopRightRadius: '5%',
  }

  const styleDishTitle = {
    gridColumn: '1',
    gridRow: '2',
    fontSize: 'calc(0.8vw + 0.8vh)',
    color: 'black',
    padding: '5% 10%',
    marginTop: '5%'
  }

  const styleDishPrice = {
      gridColumn: '2',
      gridRow: '2',
      fontFamily: "'karla', sans-serif",
      fontSize:'calc(0.5vw + 0.5vh)',
      fontWeight: 'normal',
      color:'#EE9972',
      alignSelf: 'center'
    }

  const styleDishText = {
    gridColumn: '1/ span 2',
    gridRow: '3/span 4',
    padding: '0% 10%',
    fontFamily: "'karla', sans-serif",
    fontSize:'calc(0.5vw + 0.7vh)',
    fontWeight: 'normal',
    color:'#333333',
  }

  const styleDishOrder ={
    gridColumn: '1/ span 2',
    gridRow: 'span 5',
    fontWeight: 'bold',
    fontFamily: "'karla', sans-serif",
    fontSize:'calc(0.5vw + 0.7vh)',
    padding: '5% 10%',
  }

  return (
      <section style={styleSpecials} >
        <img src={imageUrl} alt={name} style={styleDishImg} />
          <h2 style={styleDishTitle}>
              {dish}
            </h2>
          <h6 style={styleDishPrice}>
              {price}
            </h6>
          <p
          style={styleDishText}>
              {description}
              </p>
          <p
          style={styleDishOrder}>
            {'Order a delivery'}
            </p>
      </section>
  )
}
