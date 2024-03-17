import React from 'react'
import { Flex, Typography, Input, Button } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import { useTodoContext } from '../contexts/TodoContext';

const { Text } = Typography;

function TodoCompleted() {
  const { todos, handleUndoCompletedTodo } = useTodoContext();

  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <>
      <Flex gap="small">
        <Input placeholder="Please enter todo" />
        <Button>Search</Button>
      </Flex>
      <br />
      <Flex vertical="column">
        {completedTodos.map(todo => (
          <Flex key={todo.id} justify="space-between" align="center" style={{ marginTop: 5 }}>
            <Text>{todo.text}</Text>
            <Button 
              danger 
              shape="circle" 
              size='small' 
              icon={<MinusOutlined />} 
              onClick={() => handleUndoCompletedTodo(todo.id)}  
            />
          </Flex>
        ))}
      </Flex>
    </>
  )
}

export default TodoCompleted