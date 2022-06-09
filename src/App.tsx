import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoHeader } from './components/TodoHeader/TodoHeader';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './interfaces/todo';

export function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function createNewTodo(text: string) {
    const newTodo = {
      id: uuidv4(),
      title: text,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
  }

  function updateTodo(id: string) {
    const todosUpdated = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodoList(todosUpdated);
  }

  function deleteTodo(id: string) {
    const todosUpdated = todoList.filter(todo => todo.id !== id);
    setTodoList(todosUpdated);
  }

  return (
    <main>
      <TodoHeader />
      <TodoForm onSubmit={createNewTodo} />
      <TodoList
        todos={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </main>
  );
}
