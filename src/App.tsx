import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoHeader } from './components/TodoHeader/TodoHeader';
import { TodoList } from './components/TodoList/TodoList';

export function App() {
  return (
    <main>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </main>
  );
}
