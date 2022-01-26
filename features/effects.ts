import {createEffect} from 'orbit-redux';
import {increment} from './counter/counterState';
import {addTodo} from './todo/todoState';

createEffect(increment, (dispatch, getStaate)=>{
  dispatch(addTodo(`Count at ${getStaate().counter.count}`));
})