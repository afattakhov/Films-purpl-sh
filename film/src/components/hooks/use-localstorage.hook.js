//компонент
//use-localstorage.hook.js

import { useEffect, useState } from 'react';

export default function useLocalStorage(keyFromLocalStorage) {
  const [data, setData] = useState();
  //ПРОЧТИ и ОТРИСУЙ все имеющиеся карточки внутри локалСторадж под именем keyFromLocalStorage. Вытаскивает из локал сторадж. Если он пуст, то у нас есть if (res)
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(keyFromLocalStorage));
    if (res) {
      setData(res);
    }
  }, []);
  //newData = setDataOfItems
  const saveData = (newData) => {
    localStorage.setItem(keyFromLocalStorage, JSON.stringify(newData)); // эти данные для локал сторадж. Их нельзя в таком виде положить в отрисовку
    setData(newData); ////не связан со строкой выше. Просто в одной функции лежат, т.к. задачи синхронные
  }

  return [data, saveData];
}
