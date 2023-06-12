import { Button } from './Components/Button';
import HeroImg from './assets/icons_assets/restauranfood.jpg';
import GreekSalad from './assets/icons_assets/greek salad.jpg';
import Bruchetta from './assets/icons_assets/bruchetta.svg';
import LemonDessert from './assets/icons_assets/lemon dessert.jpg';
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
      <section className='bg-primary_1 min-h-fit md:max-h-[450px]'>
        <div className='max-w-5xl m-auto p-4 md:p-12 w-full justify-center flex flex-col md:flex-row gap-8'>
          <div className='flex flex-col gap-3 md:gap-5 md:w-[40%]'>
            <>
              <h1 className='font-markazi text-primary_2 text-2xl md:text-6xl'>
                Little Lemon
              </h1>
              <p className='font-markazi text-lg text-white'>Chicago</p>
            </>
            <p className='font-karla text-sm md:text-lg text-white font-medium mt-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              esse aspernatur nihil mollitia est tempore, exercitationem
            </p>
            <Link to='/reservations'>
              <Button>Reserve a table</Button>
            </Link>
          </div>
          <img
            src={HeroImg}
            alt=''
            className='hidden md:flex rounded-2xl object-cover w-[40%] max-h-[450px]'
          />
        </div>
      </section>
      <section className='mt-16 md:mt-32'>
        <div className='max-w-5xl m-auto p-4 lg:p-12 flex flex-col gap-4 md:gap-16'>
          <div className='flex justify-between items-center w-full'>
            <h2 className='text-highlight_2 font-karla font-bold text-2xl md:text-4xl'>
              Specials
            </h2>
            <Button>Online Menu</Button>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
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
      <img src={img} alt='' className='max-h-[40%] object-cover' />
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
