import React from 'react';
import { List, Checkbox, Button } from 'antd';

// context
import { useTodoContext } from '../contexts/TodoContext';

function TodoList() {
  const { todos, completeTodo, deleteTodo } = useTodoContext();

  return (
    <List
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <Button
              type="danger"
              onClick={() => deleteTodo(todo.id)}
              key="delete"
            >
              Delete
            </Button>,
          ]}
        >
          <Checkbox
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          >
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
          </Checkbox>
        </List.Item>
      )}
    />
  );
}

export default TodoList;