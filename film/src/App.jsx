import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Parag from './components/Parag/Parag';
import Input from './components/Input/Input';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';

function App() {return (
  <>
    <NavBar text="test2" />
    <CardList />
  </>
);}


export default App;
