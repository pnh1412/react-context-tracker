import React from 'react';
import { Tabs } from 'antd';

// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoCompleted from './components/TodoCompleted';
import User from './components/User';

function App() {
  const onChange = (key) => {
    // console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'All',
      children: (
        <>
          <TodoForm />
          <TodoList />
        </>
      ),
    },
    {
      key: '2',
      label: 'Completed',
      children: <TodoCompleted />
    },
  ];

  return (
    <>
      <h1 className='heading'>Todo App</h1>
      <div className='container'>
        <User />
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </>
  );
}

export default App;