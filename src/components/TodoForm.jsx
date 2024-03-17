import React, { useContext, useState } from 'react';
import { Button, Input } from 'antd';
import { TodoContext } from './TodoProvider';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo({ id: Date.now(), text, completed: false });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
        style={{ width: '70%', marginRight: '10px' }}
      />
      <Button type="primary" htmlType="submit">
        Add Task
      </Button>
    </form>
  );
}

export default TodoForm;