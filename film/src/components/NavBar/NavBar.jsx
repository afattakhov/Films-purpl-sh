//комопнент NavBar
import styles from './NavBar.module.css';

function NavBar({ dataOfItems, setDataOfItems, inputRef }) {
  const authNameForDisplay = dataOfItems?.filter((oneObj) => oneObj.islogined == true)[0];
  const handleClick = () => {
    setDataOfItems([...dataOfItems.map((elObj) => ({ ...elObj, islogined: false }))]);

  };
  const handleClickEnter = () => {

    inputRef.current.focus();
  };

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
        <a onClick={handleClickEnter} className={styles['link-navbar']}>
          {authNameForDisplay?.islogined == true ? authNameForDisplay.user : 'Войти'}
        </a>
        {authNameForDisplay?.islogined == true ? (
          <a onClick={handleClick} className={styles['link-navbar']}>
            Выйти
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
