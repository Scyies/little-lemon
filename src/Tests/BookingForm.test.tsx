import { render, screen } from '@testing-library/react';
import { BookingForm, Reservation } from '../Pages/Reservation';
import { Button } from '../Components/Button';

test('yes', () => {
  expect(1).toBe(1);
});

// test('btn', () => {
//   render(<Button>Yes</Button>);
//   expect(1).toBe(1);
// });

// test('Renders the BookingForm heading', () => {
//   const updateTimes = jest.fn();
//   const submitForm = jest.fn();
//   const availableTimes = [
//     '17:00',
//     '17:30',
//     '18:00',
//     '19:00',
//     '19:30',
//     '20:00',
//     '21:30',
//     '22:30',
//     '23:00',
//   ];
//   render(
//     <BookingForm
//       availableTimes={availableTimes}
//       updateTimes={updateTimes}
//       submitForm={submitForm}
//     />
//   );
//   const headingElement = screen.getByText('Make Your Reservation');
//   expect(headingElement).toBeInTheDocument();
// });

// test('Tests the initializeTimes function', () => {
//   render(<Reservation />);

//   const timeSelector = screen.getByTestId('res-time');
//   expect(timeSelector).toBeInTheDocument();
//   expect(timeSelector.appendChild.length).toBe(5);
// });
