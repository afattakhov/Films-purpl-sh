import CardRaiting from '../CardRaiting/CardRaiting';
import Favorites from '../Favorites/Favorites';
import './CardItem.css';

function CardItem({ data }) {
  if (!data?.title) return null;
  return (
    <div className="card-item">
      <a href="#" className="poster-link">
        <img
          className={!data.picture ? 'no-poster' : 'poster'}
          src={data.picture}
          alt="упс...у фильма нет постера"
        />
      </a>
      {!data.rating && data.title && <CardRaiting> Нет оценок</CardRaiting>}
      {data.rating && data.title && <CardRaiting>{data.rating}</CardRaiting>}
      <a className="movie-name">{data?.title}</a>
      <Favorites />
    </div>
  );
}

export default CardItem;
