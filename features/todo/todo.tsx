import React from 'react';
import { useSelectorByActions } from '../store';
import { addTodo, removeTodo, TodoFilter, toggleTodo, setFilter } from './todoState';
import Filter from './filterButton';
import { useAppSelector } from '../store';
function Todo() {
  const todos = useAppSelector((state) => {
      switch (state.todos.filter) {
        case TodoFilter.SHOW_ALL:
          return state.todos.todoList.data;
        case TodoFilter.SHOW_COMPLETED:
          return state.todos.todoList.data?.filter((todo) => todo.completed);
        case TodoFilter.SHOW_ACTIVE:
          return state.todos.todoList.data?.filter((todo) => !todo.completed);
      }
    }
  );
console.log(todos)
  return <div>
    <h1>Todos</h1>
    <Filter show={TodoFilter.SHOW_ACTIVE}/>
    <Filter show={TodoFilter.SHOW_COMPLETED}/>
    <Filter show={TodoFilter.SHOW_ALL}/>
    <button onClick={() => addTodo(`todo-${todos.length + 1}`)}>add</button>
    <ul>
      {todos?.map(todo => <li key={todo.id}>{todo.text} - {todo.completed ? 'compleed' : 'active'}
        <button onClick={() => toggleTodo(todo.id)}>toggle</button>
        <button onClick={() => removeTodo(todo.id)}>remove</button>
      </li>)}
    </ul>
  </div>
}

export default Todo;