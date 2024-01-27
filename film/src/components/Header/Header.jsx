import './Header.css';

function Header({ text, onClick }) {
  return (
    <h1 className="header" onClick={onClick}>
      {text}
    </h1>
  );
}

export default Header;
