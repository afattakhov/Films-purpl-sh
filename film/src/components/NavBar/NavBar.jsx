import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar-panel">
      <div className="navbar-link-block">
        <img className="logo-navbar" src="/Bookmark.svg" alt="лого" />
      </div>

      <div className="navbar-link-block">
        <a href="#" className="link-navbar">
          Поиск Фильмов
        </a>
        <a href="#" className="link-navbar">
          Мои фильмы
        </a>
        <a href="#" className="link-navbar">
          Войти
        </a>
      </div>
    </div>
  );
}

export default NavBar;
