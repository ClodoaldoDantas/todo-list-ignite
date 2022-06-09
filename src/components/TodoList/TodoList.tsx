import { Task } from '../Task/Task';
import { Todo } from '../../interfaces/todo';

import clipboardImg from '../../assets/clipboard.svg';
import styles from './TodoList.module.scss';

interface TodoListProps {
  todos: Todo[];
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export function TodoList({ todos, updateTodo, deleteTodo }: TodoListProps) {
  const totalTasks = todos.length;
  const totalTasksCompleted = todos.filter(todo => todo.completed).length;

  return (
    <div className={styles.container}>
      <div className={styles.todoInfo}>
        <div className={styles.todoInfoText}>
          <strong>Tarefas criadas</strong>
          <span>{totalTasks}</span>
        </div>

        <div className={styles.todoInfoText}>
          <strong>Concluídas</strong>
          <span>{`${totalTasksCompleted} de ${totalTasks}`}</span>
        </div>
      </div>

      {todos.length === 0 && (
        <div className={styles.todoEmpty}>
          <img src={clipboardImg} alt="Clipboard ícone" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}

      <ul className={styles.todoList}>
        {todos.map(todo => (
          <Task
            key={todo.id}
            data={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
