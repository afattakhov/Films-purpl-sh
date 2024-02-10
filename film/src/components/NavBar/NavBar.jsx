
import styles from './NavBar.module.css';
// import classNames from 'classnames';

function NavBar() {
  return (
    <div className={styles['navbar-panel']}>
      <div className={styles['navbar-link-block']}>
        <img className={styles['logo-navbar']} src="/Bookmark.svg" alt="лого" />
      </div>

      <div className={styles['navbar-link-block']}>
        <a href="#" className={styles['link-navbar']}>
          Поиск Фильмов
        </a>
        <a href="#" className={styles['link-navbar']}>
          Мои фильмы
        </a>
        <a href="#" className={styles['link-navbar']}>
          Войти
        </a>
      </div>
    </div>
  );
}

export default NavBar;

