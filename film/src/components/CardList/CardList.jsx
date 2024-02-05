//CardList.jsx
import { useState } from 'react';
import './CardList.css';
import CardItem from '../CardItem/CardItem';


const moviesData = [
  {
    id: 1,
    picture: '/Movie-1.svg',
    title: 'Movie 1',
    rating: 123,
  },
  {
    id: 2,
    picture: '/Movie-2.svg',
    title: 'Movie 2',
    rating: 456,
  },
  {
    id: 3,
    picture: '/Movie-3.svg',
    title: 'Movie 3',
    rating: 789,
  },
  {
    id: 4,
    picture: '/Movie-4.svg',
    title: 'Movie 4',
    rating: 321,
  },
  {
    id: 5,
    picture: '/Movie-5.svg',
    title: 'Movie 5',
    rating: 654,
  },
  {
    id: 6,
    picture: '/Movie-6.svg',
    title: 'Movie 6',
    rating: 987,
  },
  {
    id: 7,
    picture: '/Movie-7.svg',
    title: 'Movie 7',
    rating: 135,
  },
  {
    id: 8,
    picture: '/Movie-8.svg',
    title: 'Movie 8',
    rating: 246,
  },
];

function CardList() {
  const [data, setData] = useState(moviesData);

  return (
    <div>
      <div className="cardlist">
        {data.map((el) => (
          <CardItem key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
