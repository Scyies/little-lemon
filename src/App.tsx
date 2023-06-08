function App() {
  const nav = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order Online',
    'Login',
  ];

  return (
    <>
      <header>
        <nav>
          <ul className='flex gap-8'>
            {nav.map((name, i) => (
              <li className='text-bold text-lg' key={i}>
                {name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
