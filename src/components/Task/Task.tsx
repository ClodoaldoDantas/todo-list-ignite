import cx from 'classnames';
import { Trash } from 'phosphor-react';
import { Todo } from '../../interfaces/todo';
import styles from './Task.module.scss';

interface TaskProps {
  data: Todo;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({ data, onUpdate, onDelete }: TaskProps) {
  function handleDeleteTask() {
    const alertMessage = `Deseja realmente remover a tarefa de título "${data.title}" ?`;

    if (confirm(alertMessage)) {
      onDelete(data.id);
    }
  }

  function handleInputChange() {
    onUpdate(data.id);
  }

  return (
    <li className={styles.task}>
      <label htmlFor={`todo-${data.id}`} className={styles.checkbox}>
        <input
          id={`todo-${data.id}`}
          className={styles.checkboxInput}
          type="checkbox"
          onChange={handleInputChange}
          checked={data.completed}
        />
        <div className={styles.checkboxBox}></div>

        <span
          className={cx(styles.checkboxText, {
            [styles.active]: data.completed,
          })}
        >
          {data.title}
        </span>
      </label>

      <button onClick={handleDeleteTask} className={styles.taskDeleteButton}>
        <Trash size={20} />
      </button>
    </li>
  );
}
