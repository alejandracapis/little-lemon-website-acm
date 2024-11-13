import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookingConfirmation() {
  const [reservedDetails, setReserveDetails] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('Booking');
    if (data !== null) setReserveDetails(JSON.parse(data));
  }, []);

const styleConfirmSection = {
  maxWidth: 'calc(50vw + 50vh)',
  display:'grid',
  gridTemplateColumns: 'minmax(0,50%) minmax(0,50%)',
  gridTemplateRows: 'repeat(4, minmax(0,auto)',
  alignItems: 'center',
  justifyItems: 'center',
  fontFamily: "'karla', sans-serif",
  color: 'white',
  backgroundColor: '#495E57',
  border: '2vh white solid',
  borderRadius: '5vh',
  padding: '5%',
  margin: '0 10%',
  columnGap: '5%'
}

const styleConfirmHeader = {
  gridColumn: '2',
  gridRow: '1',
  color: '#F4CE14',
  fontFamily: "markazi-text",
  fontSize: 'calc(1.5vw + 1.5vh)'
}


const styleConfirmImg = {
  maxWidth: 'calc(20vw + 20vh)',
  gridColumn: '1',
  gridRow: 'span 4',
  borderRadius: '2vh'
}

const styleConfirmData = {
  fontFamily: "'karla', sans-serif",
  textTransform: 'capitalize',
  fontSize: 'calc(0.8vw + 0.8vh)',
  display: 'grid',
  gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
}

const styleConfirmArticle = {
  gridColumn: '2',
  gridRow: '2'
}

const styleConfirmAddress = {
  gridColumn: '2',
  gridRow: '3',
  fontSize: 'calc(0.5vw + 0.5vh)',
  textAlign: 'center',
  fontWeight: 'lighter'
}

const styleConfirmLink = {
  gridColumn: '2',
  gridRow: '4',
  color: 'white',
  border: '1px solid white',
  borderRadius: '1vh',
  padding: '2%',
  textDecoration: 'none'
}

const styleConfirmSpan = {
  fontFamily: "'karla', sans-serif",
  fontSize: 'calc(0.8vw + 0.8vh)',
  textAlign: 'start',
  fontWeight: 'lighter'

}

  return (
    <section style={styleConfirmSection}>
      <h1 style={styleConfirmHeader}>Booking Confirmation</h1>
      <img
          src={require('../images/restaurant.jpg')}
          alt='Little Lemon Restaurant'
          style={styleConfirmImg}
          />
      <article style={styleConfirmArticle}>
        <h3 style={styleConfirmData}>
          date: <span style={styleConfirmSpan}>{reservedDetails.date}</span>
        </h3>
        <h3 style={styleConfirmData}>
          time: <span style={styleConfirmSpan}>{reservedDetails.time}</span>
        </h3>
        <h3 style={styleConfirmData}>
          guests: <span style={styleConfirmSpan}>{reservedDetails.guests}</span>
        </h3>
        <h3 style={styleConfirmData}>
          occasion: <span style={styleConfirmSpan}>{reservedDetails.occasion}</span>
        </h3>
        <h3 style={styleConfirmData}>
          name: <span style={styleConfirmSpan}>{reservedDetails.name}</span>
        </h3>
        <h3 style={styleConfirmData}>
          phone: <span style={styleConfirmSpan}>{reservedDetails.phone}</span>
        </h3>
        </article>
        <h5 style={styleConfirmAddress}>
          Little Lemon Restaurant <br />
          1340 West Fulton Street
          Chicago, Illinois 60607
        </h5>
      <Link to='/' style={styleConfirmLink}>
        Return to homepage
      </Link>
    </section>
  );
};

