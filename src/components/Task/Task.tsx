import { Trash } from 'phosphor-react';
import styles from './Task.module.scss';

export function Task() {
  return (
    <li className={styles.task}>
      <label className={styles.checkbox}>
        <input className={styles.checkboxInput} type="checkbox" />
        <div className={styles.checkboxBox}></div>

        <span className={styles.checkboxText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      </label>

      <button className={styles.taskDeleteButton}>
        <Trash size={20} />
      </button>
    </li>
  );
}
