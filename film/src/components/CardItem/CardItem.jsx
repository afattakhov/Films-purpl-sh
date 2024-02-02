// CardItem.jsx

import './CardItem.css';

function CardItem({ data }) {

  return (
    <div className="card-item">
      <img className="poster" src={data.picture} alt="постер" />
      <div className="rating-style">
        <img src="/star.svg" alt="звзда" />
        {data.rating}
      </div>
      <h2 className="movie-name">{data.title}</h2>
    </div>
  );
}

export default CardItem;
