import clipboardImg from '../../assets/clipboard.svg';
import styles from './TodoList.module.scss';

export function TodoList() {
  return (
    <div className={styles.todoList}>
      <div className={styles.todoInfo}>
        <div className={styles.todoInfoText}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.todoInfoText}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>

      <div className={styles.todoEmpty}>
        <img src={clipboardImg} alt="Clipboard ícone" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
