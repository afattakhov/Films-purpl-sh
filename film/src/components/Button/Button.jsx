// import './Button.css';
import { forwardRef } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
const Button = forwardRef(function Button({ text, className, typeOfButton, ...restProps }, ref) {
  return (
    <button
      {...restProps}
      ref={ref}
      className={classNames(className, styles.button, styles.accent, {
        [styles['button-of-auth']]: typeOfButton === 'auth',
      })}
    >
      {text}
    </button>
  );
});

export default Button;
