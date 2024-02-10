import styles from './SearchBar.module.css';

function SearchBar({ text }) {
  return <h1 className={styles.search}>{text}</h1>;
}

export default SearchBar;
