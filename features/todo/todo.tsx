import React from 'react';
import { useSelectorByActions } from '../store';
import { addTodo, removeTodo, TodoFilter, toggleTodo, setFilter } from './todoState';
import Filter from './filterButton';

function Todo() {
  const todos = useSelectorByActions(
    [setFilter, addTodo, toggleTodo, removeTodo], (state) => {
      switch (state.todoFilter) {
        case TodoFilter.SHOW_ALL:
          return state.todos;
        case TodoFilter.SHOW_COMPLETED:
          return state.todos.filter((todo) => todo.completed);
        case TodoFilter.SHOW_ACTIVE:
          return state.todos.filter((todo) => !todo.completed);
      }
    }
  );

  return <div>
    <h1>Todos</h1>
    <Filter show={TodoFilter.SHOW_ACTIVE}/>
    <Filter show={TodoFilter.SHOW_COMPLETED}/>
    <Filter show={TodoFilter.SHOW_ALL}/>
    <button onClick={() => addTodo(`todo-${todos.length + 1}`)}>add</button>
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.text} - {todo.completed ? 'compleed' : 'active'}
        <button onClick={() => toggleTodo(todo.id)}>toggle</button>
        <button onClick={() => removeTodo(todo.id)}>remove</button>
      </li>)}
    </ul>
  </div>
}

export default Todo;