import styles from './TodoForm.module.scss';
import { PlusCircle } from 'phosphor-react';

export function TodoForm() {
  return (
    <form className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
