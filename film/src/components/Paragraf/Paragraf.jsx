import styles from './Paragraf.module.css';

function Paragraf({ text }) {
  return <div className={styles.parag}>{text}</div>;
}

export default Paragraf;
