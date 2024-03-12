//комопнент
//App
import { useRef, useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import useLocalStorage from './components/hooks/use-localstorage.hook';

function App() {
  const [dataOfItems, setDataOfItems] = useLocalStorage('dataStorageOfUsers');
  const [state, setState] = useState('');
    const inputRef = useRef();
  return (
    <>
      <Header
        state={state}
        dataOfItems={dataOfItems}
        setDataOfItems={setDataOfItems}
        inputRef={inputRef}
      />
      <Body
        setState={setState}
        state={state}
        dataOfItems={dataOfItems}
        setDataOfItems={setDataOfItems}
        inputRef={inputRef}
      />
    </>
  );
}

export default App;
