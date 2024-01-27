// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Parag from './components/Parag/Parag';

function App() {
  return (
    <>
      <Header text="test" />
      <Button text="test" />
      <Parag text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
    </>
  );
}

export default App;
