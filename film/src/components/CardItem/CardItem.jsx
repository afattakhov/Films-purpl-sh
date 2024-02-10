import CardRaiting from '../CardRaiting/CardRaiting';
import Favorites from '../Favorites/Favorites';
import styles from './CardItem.module.css';
import classNames from 'classnames';

function CardItem({ data }) {
  if (!data?.title) return null;
  return (
    <div className={styles['card-item']}>
      <a href="#" className={styles['poster-link']}>
        <img
          className={classNames(styles.poster, { [styles['no-poster']]: !data.picture })}
          src={data.picture}
          alt="упс...у фильма нет постера"
        />
      </a>
      <CardRaiting>{data.rating ? data.rating : 'Нет оценок'}</CardRaiting>
      <a className={styles["movie-name"]}>{data?.title}</a>
      <Favorites />
    </div>
  );
}

export default CardItem;
