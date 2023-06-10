import { Button } from './Components/Button';
import HeroImg from './assets/icons_assets/restauranfood.jpg';
import GreekSalad from './assets/icons_assets/greek salad.jpg';
import Bruchetta from './assets/icons_assets/bruchetta.svg';
import LemonDessert from './assets/icons_assets/lemon dessert.jpg';
import { Header } from './Components/Header';
import { Link } from 'react-router-dom';

function App() {
  const specials = [
    {
      img: GreekSalad,
      name: 'Greek Salad',
      description: 'Lorem ipsum dolor auhdausdnkjnqowdas',
      price: '12.99',
    },
    {
      img: Bruchetta,
      name: 'Bruchetta',
      description: 'Lorem ipsum dolor auhdausdnkjnqowdas',
      price: '16.77',
    },
    {
      img: LemonDessert,
      name: 'Lemon Dessert',
      description: 'Lorem ipsum dolor auhdausdnkjnqowdas',
      price: '14.55',
    },
  ];

  return (
    <>
      <section className='bg-primary_1 max-h-[450px]'>
        <div className='max-w-5xl m-auto p-12 flex gap-8'>
          <div className='flex flex-col gap-5 w-[50%]'>
            <>
              <h1 className='font-markazi text-primary_2 text-6xl'>
                Little Lemon
              </h1>
              <p className='font-markazi text-lg text-white'>Chicago</p>
            </>
            <p className='font-karla text-lg text-white font-medium mt-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              esse aspernatur nihil mollitia est tempore, exercitationem
              veritatis iure ut! In nihil iste architecto aut aspernatur
              necessitatibus aliquam sunt amet explicabo!
            </p>
            <Link to='/reservations'>
              <Button>Reserve a table</Button>
            </Link>
          </div>
          <img
            src={HeroImg}
            alt=''
            className='rounded-2xl object-cover w-[50%] h-[450px]'
          />
        </div>
      </section>
      <section className='mt-32'>
        <div className='max-w-5xl m-auto p-12 flex flex-col gap-16'>
          <div className='flex justify-between items-center w-full'>
            <h2 className='text-highlight_2 font-karla font-bold text-4xl'>
              Specials
            </h2>
            <Button>Online Menu</Button>
          </div>
          <div className='grid grid-cols-3 gap-8'>
            {specials.map((dish, i) => (
              <DishCard key={i} {...dish} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

interface DishCardProps {
  name: string;
  price: string;
  description: string;
  img: string;
}

export function DishCard({ name, price, description, img }: DishCardProps) {
  return (
    <div className='rounded-2xl bg-[#d9d9d9] min-h-max overflow-hidden flex flex-col gap-3'>
      <img src={img} alt='' className='h-[40%] object-cover' />
      <div className='p-3 flex flex-col gap-2 justify-between h-full'>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between'>
            <h3 className='font-bold font-markazi text-lg'>{name}</h3>
            <p className='font-karla text-red-700 font-bold'>
              $ {Number(price)}
            </p>
          </div>
          <p className='text-highlight_2 font-karla text-base'>{description}</p>
        </div>
        <a href='#' className='font-bold font-markazi text-lg'>
          Order a delivery
        </a>
      </div>
    </div>
  );
}
