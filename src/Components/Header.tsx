import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/icons_assets/Logo.svg';
import { Footer } from './Footer';
import classNames from 'classnames';
import { useState } from 'react';
import HMenu from '../assets/icons_assets/haburger menu.svg';

type NavT = { name: string; link: string };

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      <header className='flex justify-between p-4 lg:p-12 gap-8 items-center max-w-5xl m-auto'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <nav className='hidden md:flex'>
          <ul className='flex gap-2 md:gap-4 lg:gap-8 font-karla'>
            {nav.map((link, i) => (
              <MenuItems link={link} key={i} />
            ))}
          </ul>
        </nav>
        <nav className='md:hidden'>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <img src={HMenu} alt='' />
          </button>
          <BurgerMenu isOpen={isOpen} links={nav} />
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

function BurgerMenu({ isOpen, links }: { isOpen: boolean; links: NavT[] }) {
  return (
    <div
      className={classNames(
        'fixed h-screen bg-white max-w-[220px] w-[50vw] right-0 px-6 transition-all z-50',
        {
          'translate-x-full': isOpen === false,
          'translate-x-0': isOpen === true,
        }
      )}
    >
      <ul className='flex flex-col mt-6 justify-center text-center gap-4'>
        {links.map((link, i) => (
          <MenuItems link={link} key={i} />
        ))}
      </ul>
    </div>
  );
}

interface MenuItemsProps {
  link: {
    name: string;
    link: string;
  };
}

function MenuItems({ link }: MenuItemsProps) {
  return (
    <li className='font-bold text-sm md:text-md lg:text-lg text-highlight_2 p-2 rounded-lg hover:bg-primary_2 active:bg-primary_2'>
      <Link to={link.link}>{link.name}</Link>
    </li>
  );
}
