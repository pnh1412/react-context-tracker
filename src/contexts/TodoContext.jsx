import React, { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUndoCompletedTodo = (id) => {
    // find index todo
    // update item of index
    const clonedTodos = JSON.parse(JSON.stringify(todos));
    const todoIndex = clonedTodos.findIndex((todo) => todo.id === id);
    clonedTodos[todoIndex].completed = false;
    setTodos(clonedTodos)
  }

  const value = {
    // states
    todos,
    addTodo,

    // actions
    completeTodo,
    deleteTodo,
    handleUndoCompletedTodo,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;