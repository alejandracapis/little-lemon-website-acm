import React from 'react';
import Nav from './subcomponents/Nav';

export default function Header() {
  const styleHeader = {
    display:'grid',
    gridTemplateColumns: 'minmax(0, 10%) minmax(0,60%)',
    alignItems:'center',
    justifyContent:'space-around', maxHeight:'10vh',
    margin: '1rem'
  }

  return (
    <header style={styleHeader}>
        <img src={require('./images/logo.jpg')} alt='logo' style={{maxWidth: '10vw'}} />
        <Nav />
    </header>
  )
}
