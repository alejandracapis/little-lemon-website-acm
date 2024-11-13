import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterNav({titleNavFoot, pathOne, pathTwo, pathThree, pathFour, pathFive, pathSix, navOne, navTwo, navThree, navFour, navFive, navSix}) {
    const styleFooterNav = {
        color: 'white',
        fontFamily: '"karla", sans-serif',
        fontSize: 'calc(0.5vw + 0.5vh)'
    }
    const styleTitleNavFoot = {
        color:'white',
        fontFamily: "'karla', sans-serif",
        fontWeight: 'bold',
        fontSize: 'calc(0.5vw + 0.5vh)'
    }
    const styleFooterNavColumn = {
        display:'grid',
        gridAutoFlow: 'row',
        alignItems:'start',
        justifyContent:'start'
    }

  return (
    <section style={styleFooterNavColumn}>
      <h3 style={styleTitleNavFoot}>{titleNavFoot}</h3>
      <Link to={pathOne} style={styleFooterNav}>{navOne}</Link>
      <Link to={pathTwo} style={styleFooterNav}>{navTwo}</Link>
      <Link to={pathThree} style={styleFooterNav}>{navThree}</Link>
      <Link to={pathFour} style={styleFooterNav}>{navFour}</Link>
      <Link to={pathFive} style={styleFooterNav}>{navFive}</Link>
      <Link to={pathSix} style={styleFooterNav}>{navSix}</Link>
    </section>
  )
}
