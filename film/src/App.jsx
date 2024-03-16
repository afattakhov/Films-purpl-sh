// //комопнент
// //App
// import { useRef, useState } from 'react';
// import './App.css';
// import Body from './components/Body/Body';
// import Header from './components/Header/Header';
// import useLocalStorage from './components/hooks/use-localstorage.hook';

// function App() {
//   const [dataOfItems, setDataOfItems] = useLocalStorage('dataStorageOfUsers');
//   const [state, setState] = useState('');
//     const inputRef = useRef();
//   return (
//     <>
//       <Header
//         state={state}
//         dataOfItems={dataOfItems}
//         setDataOfItems={setDataOfItems}
//         inputRef={inputRef}
//       />
//       <Body
//         setState={setState}
//         state={state}
//         dataOfItems={dataOfItems}
//         setDataOfItems={setDataOfItems}
//         inputRef={inputRef}
//       />
//     </>
//   );
// }

// export default App;
//комопнент
//App
import { useRef, useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import useLocalStorage from './components/hooks/use-localstorage.hook';
import { Usercontext } from './context/user.context';

function App() {
  const [dataOfItems, setDataOfItems] = useLocalStorage('dataStorageOfUsers');//состояние данных всех имеющихся пользователей в локал сторадж
  const [state, setState] = useState(''); //состояние данных одного пользователя,который пытается залогиниться или войти
  const inputRef = useRef();
  return (
    <Usercontext.Provider value={{ dataOfItems, setDataOfItems, state, setState, inputRef }}>
      <>
        <Header inputRef={inputRef} />
        <Body  />
      </>
    </Usercontext.Provider>
  );
}

export default App;
