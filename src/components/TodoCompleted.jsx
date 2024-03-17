import React from 'react'
import { Flex, Typography, Input, Button, List } from 'antd';
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
      <List
        dataSource={completedTodos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button 
                danger 
                shape="circle" 
                size='small' 
                icon={<MinusOutlined />} 
                onClick={() => handleUndoCompletedTodo(todo.id)}  
              />
            ]}
          >
            <Flex key={todo.id} justify="space-between" align="center" style={{ marginTop: 5 }}>
              <Text>{todo.text}</Text>
             
            </Flex>
          </List.Item>
        )}
      />
    </>
  )
}

export default TodoCompleted