import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingConfirmation from './components/subcomponents/BookingConfirmation';
import BookingPage from './components/BookingPage';


import './App.css';



function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage/>} />
        <Route path='/confirmation' element={<BookingConfirmation/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
