import Restaurant from '../assets/icons_assets/restaurant.jpg';

export function BookingConfirmation() {
  return (
    <main className='grid place-items-center'>
      <div className='relative w-full grid place-items-center items-center'>
        <div className='bg-primary_1 p-4 rounded-lg z-10'>
          <h1 className='text-5xl font-bold font-markazi text-primary_2 '>
            Confirmation Confirmed
          </h1>
        </div>
        <img src={Restaurant} alt='' className='absolute inset-0 z-0' />
      </div>
    </main>
  );
}
