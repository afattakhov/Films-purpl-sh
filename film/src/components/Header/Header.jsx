import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import NavBar from '../NavBar/NavBar';
import Paragraf from '../Paragraf/Paragraf';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
function Header() {
  const [clickRes, setCklickRes] = useState('');
  const clickHandle = () => {
    setCklickRes(clickRes);
  };
  return (
    <>
      <NavBar />
      <SearchBar text="Поиск" />
      <Paragraf text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <div className="input-button-main">
        <Input />
        <Button text="Искать" onClick={clickHandle} />
      </div>
    </>
  );
}
export default Header;
