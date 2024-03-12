import { forwardRef, useRef } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';
const Input= forwardRef( function Input({ className, typeOfinput, ...rest },ref) {

  return (
    <div>
      <input
        {...rest}
        ref={ref}
        className={classNames(className, styles.input, styles['input-placeholde'], {
          [styles['input-find']]: typeOfinput === 'title',
        })}
      />
    </div>
  );
})

export default Input;
