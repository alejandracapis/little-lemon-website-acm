import { render, screen } from '@testing-library/react';
import BookingForm from './components/subcomponents/BookingForm';
import { initializeTimes, updateTimes } from './pages/BookingPage';
import { fetchAPI } from './components/utils';

test('Renders the Choose Date Label', () => {
  render(
    <BookingForm
      availableTimes={{
        times: [],
      }}
      dispatch={expect.anything()}
    />
  );
  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct expected value', () => {
  const today = new Date();
  const initialState = initializeTimes();
  const expectedResult = { times: fetchAPI(today) };
  expect(initialState).toEqual(expectedResult);
});

test('updateTimes returns the same state', () => {
  const state = {
    times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };
  const action = { type: 'SOME_ACTION' };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});

