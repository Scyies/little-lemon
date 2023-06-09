import { Link } from 'react-router-dom';
import Logo from '../assets/icons_assets/Logo.svg';

export function Header() {
  const nav = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order Online',
    'Login',
  ];
  return (
    <header className='flex justify-between p-12 gap-8 items-center max-w-5xl m-auto'>
      <img src={Logo} alt='' />
      <nav className=''>
        <ul className='flex gap-8 font-karla'>
          {nav.map((name, i) => (
            <li className='font-bold text-lg text-highlight_2' key={i}>
              <Link to={`/${name.toLowerCase()}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
