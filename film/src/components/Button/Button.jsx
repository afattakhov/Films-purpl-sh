// import './Button.css';
import styles from './Button.module.css';
import classNames from 'classnames';
function Button({ text, onClick }) {
  return (
    <button className={classNames(styles.button, styles.accent)} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
