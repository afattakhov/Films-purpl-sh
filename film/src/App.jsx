
import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Parag from './components/Parag/Parag';
import Input from './components/Input/Input';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [clickRes, setCklickRes] = useState(0);
  const clickHandle = () => {
    setCklickRes((clickRes) => clickRes + 1);
  };
  return (
    <>
      <NavBar text="test2" />
      <Header text="test" />
      <Input />
      <Button text={'Нажали ' + `${clickRes}` + ' раз/a'} onClick={clickHandle} />
      <Parag text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
    </>
  );
}

export default App;
