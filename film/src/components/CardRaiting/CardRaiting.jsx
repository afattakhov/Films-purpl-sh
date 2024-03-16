import styles from './CardRaiting.module.css';

function CardRaiting({ children }) {
  return (
    <div className={styles["rating-style"]}>
      <img src="/star.svg" alt="звезда" />
      {children}
    </div>
  );
}

export default CardRaiting;
