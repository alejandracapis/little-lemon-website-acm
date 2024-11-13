import React from 'react';
import { useState, useEffect} from 'react';
import { submitAPI, validateEmail } from './utils';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import '@fontsource/markazi-text';



export default function BookingForm({ availableTimes, dispatch }) {
    const navigate = useNavigate();
    const { times } = availableTimes;
    const [booking, setBooking] = useState({
      date: new Date().toISOString().substring(0, 10),
      time: '17:00',
      guests: '',
      occasion: 'Birthday',
      name: '',
      email: '',
      phone: ''
    });

    useEffect(() => {
      localStorage.setItem('Booking', JSON.stringify(booking));
    }, [booking]);

    const handleSubmit = e => {
      e.preventDefault();

      if ((getIsFormValid !== '')) {
        submitAPI();
        navigate('/confirmation');

        console.log(`
        Date: ${booking.date},
        Time: ${booking.time},
        Number of Guests: ${booking.guests},
        Occasion: ${booking.occasion}
        Name: ${booking.name}
        Email: ${booking.email}
        Phone number: ${booking.phone}
        `);

        setBooking({
          date: '',
          time: '17:00',
          guests: '',
          occasion: 'Birthday',
          name: '',
          email: '',
          phone: ''
        });
      } else {
        console.log('THERE IS AN ERROR SUBMITTING YOUR FORM');
      }
    };

  const handleChange = e => {
    const { name, value } = e.target;

    setBooking({ ...booking, [name]: value });
  }

  const getIsFormValid = () => {
    return (
      booking.date &&
      booking.time &&
      booking.guests > 0 &&
      booking.occasion !== "occasion" &&
      booking.firstName &&
      validateEmail(booking.email) &&
      booking.phone >= 10
    );
  };

  const styleForm = {
    margin: '5%',
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'grid',
    fontFamily: '"karla", sans-serif'
}

  const styleField = {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0,50%)',
  }

  const styleFormLogo = {
    maxWidth: '10vw'}

const styleFormTitle = {
  fontSize: 'calc(1.2vw + 1vh)',
  fontWeight: 'bold',
  fontFamily: '"markazi-text", sans-serif',
  color: '#495e57'
}

const styleFieldSet = {
  display: 'grid',
  gridTemplateRows: '5vh 4vh repeat(9, minmax(0, auto))',
  rowGap: '5%',
  width: 'calc(40vw)',
  height: 'calc(60vh)',
  padding: '5% 5% 10%',
  border: '5px solid #495e57',
  borderRadius: '1vh',
  backgroundColor: 'white'
}

const styleFieldLabel = {
  fontFamily: '"karla", sans-serif',
  marginBottom: '1vh',
  fontSize: 'calc(0.6vw + 0.6vh)',
  color: '#495e57'
}

const styleSup = {
  color: 'red',
  top: '-2px',
  fontSize: 'calc(0.6vw + 0.6vh)',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline'
}

const styleInput = {
  borderRadius: '1vh',
  border: '1px solid #495E57',
  height: '3vh',
  padding: '0 2%',
  fontFamily: '"karla", sans-serif',

}


const styleSelect = {
  borderRadius: '1vh',
  border: '1px solid #495E57',
  height: '3vh',
  padding: '0 2%',
  fontFamily: '"karla", sans-serif',
  backgroundColor: '#495E57',
  color: 'white'
}

const styleFormBtn = {
  fontFamily: '"karla", sans-serif',
  width: 'calc(10vw)',
  height: 'calc(5vh)',
  borderRadius: '0.8vh',
  border: 'none',
  color: '#333333',
  textTransform: 'uppercase',
  fontSize: 'calc(0.6vw + 0.6vh)',
  cursor: 'pointer',
  backgroundColor: '#F4CE14',
  textAlign: 'center',
  fontWeight: 'bold'
}


  return (
    <>
      <form
      style={styleForm}
      onSubmit={handleSubmit}
      aria-label='On Submit'>
        <fieldset style={styleFieldSet}>
          <img src={require('../images/logo.jpg')} alt='logo form' style={styleFormLogo} />
          <h2 style={styleFormTitle}>Book a table</h2>
          <div style={styleField}>
            <label style={styleFieldLabel}>
              Choose date <sup style={styleSup}>*</sup>
            </label>
            <input
            style={styleInput}
            name='date'
            type='date'
            id='book-date'
            value={booking.date}
            aria-label='On Change'
            onChange={e => {
              setBooking({ ...booking, date: e.target.value });
              // new Date (e.target.value),  date argument on fetchAPI function can access .getDate() and set availableTimes different based on a given Date
              dispatch({
                type: 'UPDATE_TIMES',
                date: new Date(e.target.value),
              });
            }}
            required={true}/>
          </div>
          <div style={styleField}>
            <label style={styleFieldLabel}>
              Choose a time <sup style={styleSup}>*</sup>
            </label>
            <select
            style={styleSelect}
            name='time'
            value={booking.time}
            onChange={handleChange}
            aria-label='On Change'
            required={true}>
              {times.map(time => (
                <option key={time}>{time}</option>
              ))}
            </select>
            </div>
          <div style={styleField}>
            <label style={styleFieldLabel}>
              Number of guests <sup style={styleSup}>*</sup>
            </label>
            <input
            style={styleInput}
            type='number'
            placeholder='1-20'
            min='1'
            max='20'
            id='book-guests'
            name='guests'
            value={booking.guests}
            onChange={handleChange}
            aria-label='On Change'
            required={true}
            />
          </div>
          <div style={styleField}>
            <label style={styleFieldLabel}>
              Occasion <sup style={styleSup}>*</sup>
            </label>
            <select
            style={styleSelect}
            id='book-occasion'
            value={booking.occasion} 
            onChange={handleChange}
            aria-label='On Change'
            required={true}
            >
              <option value="occasion">Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Family Reunion">Family Reunion</option>
              <option value="None">None</option>
            </select>
          </div>
          <div style={styleField}>
            <label style={styleFieldLabel}>
              Full Name <sup style={styleSup}>*</sup>
            </label>
            <input
            style={styleInput}
            value={booking.name}
            name='name'
            placeholder='First and last name'
            id='book-name'
            onChange={handleChange}
            aria-label='On Change'
            required={true}
            />
          </div>
          <div style={styleField}>
            <label style={styleFieldLabel}>
              Email address <sup style={styleSup}>*</sup>
            </label>
            <input
            style={styleInput}
            placeholder='Email'
            value={booking.email}
            id='book-email'
            name='email'
            onChange={handleChange}
            aria-label='On Change'
            required={true}
            />
          </div>
          <div style={styleField}>
            <label style={styleFieldLabel}>
              Phone number <sup style={styleSup}>*</sup>
            </label>
            <input
            style={styleInput}
            name='phone'
            placeholder='Phone number'
            id='book-number'
            value={booking.phone}
            onChange={handleChange}
            aria-label='On Change'
            required={true}
            />
          </div>
          <button
          type="submit"
          style={styleFormBtn}
          >
            Book now
          </button>
        </fieldset>
      </form>
    </>
  );
};
