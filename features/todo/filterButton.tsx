import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { setFilter, TodoFilter} from './todoState';


export default ({show}:{show:TodoFilter}) =>{
  const filter=useAppSelector(state=>state.todoFilter);
  const dispatch = useAppDispatch();
  
  return <button 
      className={activeClass(filter, show)} 
      onClick={() => dispatch(setFilter(show))}>
        {show}
    </button>
}
function activeClass(current:TodoFilter, btn:TodoFilter){
  return current  ===btn?'active-filter':'';
}