import './CardRaiting.css';

function CardRaiting({ children }) {
  return (
    <div className="rating-style">
      <img src="/star.svg" alt="звезда" />
      {children}
    </div>
  );
}

export default CardRaiting;
