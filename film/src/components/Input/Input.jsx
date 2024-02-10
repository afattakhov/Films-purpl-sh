import styles from './Input.module.css';
import classNames from 'classnames';
function Input() {
  return (
    <div>
      <input
        type="text"
        name="title"
        className={classNames(styles.input, styles['input-placeholde'], styles["input-find"])}
        placeholder="текст плейсхолдера"
      />
    </div>
  );
}

export default Input;
