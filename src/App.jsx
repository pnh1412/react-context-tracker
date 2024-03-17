import React from 'react';
import { Layout } from 'antd';
import TodoProvider from './components/TodoProvider';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const { Header, Content } = Layout;

function App() {
  return (
    <TodoProvider>
      <Layout>
        <Header>
          <h1 style={{ color: 'white' }}>Todo App</h1>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <TodoForm />
            <TodoList />
          </div>
        </Content>
      </Layout>
    </TodoProvider>
  );
}

export default App;