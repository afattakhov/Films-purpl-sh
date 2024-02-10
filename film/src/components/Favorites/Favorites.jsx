import styles from './Favorites.module.css';

function Favorites() {
  return (
    <button className={styles.favorites}>
      <img src="/like.svg" alt="лайк" /> В избранное
    </button>
  );
}

export default Favorites;
