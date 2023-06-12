import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../Components/Button';

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

    localStorage.setItem('formData', JSON.stringify(responseBody));

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
