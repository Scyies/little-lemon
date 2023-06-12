import { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react';
import { Button } from '../Components/Button';
import { fetchAPI, submitAPI } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { BookingForm } from '../Components/BookingForm';

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

  const navigate = useNavigate();

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

  function submitForm(formData: any) {
    if (submitAPI(formData) === true) {
      console.log('deu bom');
      navigate('/confirmation');
    } else {
      console.log(submitAPI(formData));
    }
  }

  useEffect(() => {
    initializeTimes();
  }, []);
  return (
    <>
      <section className='max-w-5xl m-auto p-12 flex justify-center gap-8'>
        <BookingForm
          availableTimes={state.availableTimes}
          updateTimes={updateTimes}
          submitForm={submitForm}
        />
      </section>
    </>
  );
}
