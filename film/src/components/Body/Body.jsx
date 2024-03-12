////комопнент Body
import Button from '../Button/Button';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';

import styles from './Body.module.css';
function customMap(dataOfItems) {
  if (!dataOfItems) {
    return [];
  }
  return dataOfItems.map((oneObj) => oneObj.user);
}
function Body({ setState, state, dataOfItems, setDataOfItems, inputRef }) {

  const hadlChange = (e) => {
    const inputValue = e.target.value.trim();
// if(!inputValue){
//   return;
// }
    setState(inputValue);
  };
  const addNewItem = () => {
    if (!state) {
      return;
    }
    const authValidArr = customMap(dataOfItems);
    if (authValidArr.includes(state)) {
      setDataOfItems([
        ...dataOfItems.map((OneObj) =>
          OneObj.user === state ? { ...OneObj, islogined: true } : { ...OneObj, islogined: false },
        ),
      ]);
    } else {
      setDataOfItems([
        ...dataOfItems.map((OneObj) =>
          OneObj.user !== state ? { ...OneObj, islogined: false } : { ...OneObj, islogined: true },
        ),
        {
          user: state,
          islogined: true,
          id: dataOfItems?.length > 0 ? Math.max(...dataOfItems.map((el) => el.id)) + 1 : 1, // создание нового айди---длина лучше отрабатываетчем сам факт сущетсоввания oldData
        },
      ]);
    }
    setState('');
  };
  return (
    <>
      <CardList />
      <div className={styles['input-button-main2']}>
        <Input
          name="user"
          type="text"
          typeOfinput="auth"
          placeholder="Ваше имя"
          value={state}
          onInput={hadlChange}
          ref={inputRef}
        />
        <Button text="Войти" typeOfButton="auth" onClick={addNewItem} />
      </div>
    </>
  );
}
export default Body;
