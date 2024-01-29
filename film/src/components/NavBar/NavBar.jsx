import './NavBar.css';

const linkOfNavbar = ['Поиск Фильмов', 'Мои фильмы', 'Войти', 'Выйти'];

function NavBar() {
  return (
    <div className="navbar-panel">
      <div className="navbar-link-block">
        <img className="logo-navbar" src="/Bookmark.svg" alt="лого" />
      </div>

      <div className="navbar-link-block">
        {linkOfNavbar.map((el, index) => (
          <a key={index} href="#" className="link-navbar">
            {el}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
