import React from 'react'

export default function FooterText({title, txtOne, txtTwo, txtThree}) {
    const styleFooterColumn = {
        display:'grid',
        gridAutoFlow: 'row',
        alignItems:'start',
        justifyContent:'start'
    }
    const styleFooterTitle = {
        color:'white',
        fontFamily: "'karla', sans-serif",
        fontWeight: 'bold',
        fontSize: 'calc(0.5vw + 0.5vh)'

    }
    const styleFooterTxt = {
        color: 'white',
        fontFamily: "'karla', sans-serif",
        fontSize: 'calc(0.5vw + 0.5vh)'
    }

  return (
    <section style={styleFooterColumn}>
        <h3 style={styleFooterTitle}>{title}</h3>
        <p style={styleFooterTxt}>{txtOne}</p>
        <p style={styleFooterTxt}>{txtTwo}</p>
        <p style={styleFooterTxt}>{txtThree}</p>
    </section>
  )
}
