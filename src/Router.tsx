import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Reservation } from './Pages/Reservation';
import { BookingConfirmation } from './Pages/BookingConfirmation';
import { Header } from './Components/Header';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<App />} />
          <Route path='/reservations' element={<Reservation />} />
          <Route path='/confirmation' element={<BookingConfirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
