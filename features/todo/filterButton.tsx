import React from 'react';
import { useAppSelector } from '../store';
import { setFilter, TodoFilter } from './todoState';

export default ({ show }: { show: TodoFilter }) => {
  const filter = useAppSelector((state) => state.todos.filter);

  return (
    <button
      className={activeClass(filter, show)}
      onClick={() => setFilter(show)}
    >
      {show}
    </button>
  );
};
function activeClass(current: TodoFilter, btn: TodoFilter) {
  return current === btn ? 'active-filter' : '';
}
