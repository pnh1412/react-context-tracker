import React, { useState } from 'react';
import { Button, Input, Row, Col } from 'antd';

// context
import { useTodoContext } from '../contexts/TodoContext';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo({ id: Date.now(), text, completed: false });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <Row>
        <Col flex="auto">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task"
            width="100%"
          />
        </Col>
        <Col flex="0 1 100px">
          <div className='flex justify-end'>
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </div>
          
        </Col>
      </Row>
      <br />
    </form>
  );
}

export default TodoForm;