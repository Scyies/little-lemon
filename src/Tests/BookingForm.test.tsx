import { render, screen } from '@testing-library/react';
import { BookingForm } from '../Pages/Reservation';
import '@testing-library/jest-dom';

test('Renders the BookingForm heading', () => {
  const updateTimes = jest.fn();
  const availableTimes = [
    '17:00',
    '17:30',
    '18:00',
    '19:00',
    '19:30',
    '20:00',
    '21:30',
    '22:30',
    '23:00',
  ];
  render(
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
  );
  const headingElement = screen.getByText('Make Your Reservation');
  expect(headingElement).toBeInTheDocument();
});
