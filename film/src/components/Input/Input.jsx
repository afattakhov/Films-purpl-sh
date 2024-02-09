import './Input.css';

function Input() {
  return (
    <div>
      <input
        type="text"
        name="title"
        className="input input-placeholder input-find"
        placeholder="текст плейсхолдера"
      />
    </div>
  );
}

export default Input;
