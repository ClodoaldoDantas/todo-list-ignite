import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './TodoForm.module.scss';

interface TodoFormProps {
  onSubmit: (text: string) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(text);
    setText('');
  }

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setText(event.target.value);
  }

  function handleTextInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Descrição é obrigatória');
  }

  const isTextEmpty = text.length === 0;

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        value={text}
        onInvalid={handleTextInvalid}
        onChange={handleTextChange}
      />

      <button type="submit" disabled={isTextEmpty}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
