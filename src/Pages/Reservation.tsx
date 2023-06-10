import { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react';
import { Button } from '../Components/Button';
import { Header } from '../Components/Header';
import { fetchAPI, submitAPI } from '../api/api';
import { useNavigate } from 'react-router-dom';

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

interface BookingFormProps {
  availableTimes: string[];
  updateTimes: (selectedDate: Date) => void;
  submitForm: (formData: any) => void;
}

export function BookingForm({
  availableTimes,
  updateTimes,
  submitForm,
}: BookingFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  function hadleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedDate = event.target.value;
    const newDate = new Date(selectedDate);
    updateTimes(newDate);
  }

  function sendForm(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    const responseBody: any = {};

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.forEach(
      (value, property: string) => (responseBody[property] = value)
    );
    console.log(JSON.stringify(responseBody));

    submitForm(responseBody);
    setIsLoading(false);
  }

  return (
    <form onSubmit={sendForm} className='grid max-w-[500px] w-full gap-5'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='res-date' className='font-karla font-medium'>
          Choose date
        </label>
        <input
          name='date'
          className='rounded-2xl shadow-md p-3'
          type='date'
          id='res-date'
          onChange={hadleDateChange}
          required
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label className='font-karla font-medium' htmlFor='res-time'>
          Choose time
        </label>
        <select
          name='time'
          id='res-time'
          className='rounded-2xl shadow-md p-3'
          required
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-2'>
        <label className='font-karla font-medium' htmlFor='guests'>
          Number of guests
        </label>
        <input
          name='n-people'
          className='rounded-2xl shadow-md p-3'
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          required
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label className='font-karla font-medium' htmlFor='occasion'>
          Occasion
        </label>
        <select
          name='occasion'
          id='occasion'
          className='rounded-2xl shadow-md p-3'
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <Button disabled={isLoading} aria-onclick={'Clicked'} type='submit'>
        Make Your Reservation
      </Button>
    </form>
  );
}
