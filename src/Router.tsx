import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Reservation } from './Pages/Reservation';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/reservations' element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}
