import React from 'react';
import './Input.css';

function Input() {
  return (
    <div className="input-container">
      <input
        type="text"
        name="title"
        className="input input-placeholder input-find"
        placeholder="текст плейсхолдера"
      />
      <div className="search-icon"></div>
    </div>
  );
}

export default Input;
