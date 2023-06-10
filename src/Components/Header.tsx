import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/icons_assets/Logo.svg';

export function Header() {
  const nav = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Menu', link: '/menu' },
    { name: 'Reservations', link: '/reservations' },
    { name: 'Order Online', link: '/orderonline' },
    { name: 'Login', link: '/login' },
  ];
  return (
    <>
      <header className='flex justify-between p-12 gap-8 items-center max-w-5xl m-auto'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <nav className=''>
          <ul className='flex gap-8 font-karla'>
            {nav.map((link, i) => (
              <li className='font-bold text-lg text-highlight_2' key={i}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
