import React from 'react';
import FooterText from './subcomponents/FooterText';
import FooterNav from './subcomponents/FooterNav';

export default function Footer() {
  const styleFooterSection = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    padding: '2% 10% 2%',
    backgroundColor: '#495E57'
  }

  const styleFooterLogo = {
    gridColumn: '1',
    height:'calc(5vw + 5vh)',
    maxHieght:'calc(5vw + 5vh)',
    width:'auto'
     }

  return (
    <footer style={styleFooterSection}>
      <img src={require('./images/largelogogreen.png')} alt='footer logo' style={styleFooterLogo} />
      <FooterNav
      titleNavFoot="Doormat Navigation"
      pathOne="/" navOne="Home"
      pathTwo="/menu" navTwo="Menu"
      pathThree="/testimonials" navThree="Testimonials"
      pathFour="/booking" navFour="Reservations"/>
      <FooterText
      title="Contact"
      txtOne="Address"
      txtTwo="Phone Number"
      txtThree="Email"
      />
      <FooterText
      title="Social Media Links"
      txtOne="Facebook"
      txtTwo="Instagram"
      txtThree="Twitter"
      />
    </footer>
  )
}
