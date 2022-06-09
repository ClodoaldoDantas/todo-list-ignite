import logoImg from '../../assets/logo.svg';
import styles from './TodoHeader.module.scss';

export function TodoHeader() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logotipo do todo list" />
    </header>
  );
}
