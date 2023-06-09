import { ChangeEvent, useEffect, useReducer } from 'react';
import { Button } from '../Components/Button';
import { Header } from '../Components/Header';
import { fetchAPI } from '../api/api';

const initialState = {
  availableTimes: [],
};

const reducer = (
  state: typeof initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Here, you can modify the availableTimes based on the selected date
      // For now, let's return the same available times regardless of the date
      return {
        ...state,
        availableTimes: action.payload,
      };
    default:
      return state;
  }
};

export function Reservation() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function updateTimes(selectedDate: Date) {
    try {
      const availableTimes = fetchAPI(selectedDate);

      dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
    } catch (error) {
      console.log(error);
    }
  }

  function initializeTimes() {
    try {
      const today = new Date();
      const availableTimes = fetchAPI(today);
      dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    initializeTimes();
  }, []);
  return (
    <>
      <Header />
      <section className='max-w-5xl m-auto p-12 flex justify-center gap-8'>
        <BookingForm
          availableTimes={state.availableTimes}
          updateTimes={updateTimes}
        />
      </section>
    </>
  );
}

interface BookingFormProps {
  availableTimes: string[];
  updateTimes: (selectedDate: Date) => void;
}

export function BookingForm({ availableTimes, updateTimes }: BookingFormProps) {
  function hadleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedDate = event.target.value;
    const newDate = new Date(selectedDate);
    updateTimes(newDate);
  }
  return (
    <form className='grid max-w-[500px] w-full gap-5'>
      <label htmlFor='res-date'>Choose date</label>
      <input type='date' id='res-date' onChange={hadleDateChange} />
      <label htmlFor='res-time'>Choose time</label>
      <select name='' id='res-time'>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input type='number' placeholder='1' min='1' max='10' id='guests' />
      <label htmlFor='occasion'>Occasion</label>
      <select id='occasion'>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <Button type='submit'>Make Your Reservation</Button>
    </form>
  );
}
