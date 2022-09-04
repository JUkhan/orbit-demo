import {on} from 'orbit-redux';
import {increment} from './counter/counterState';
import {addTodo} from './todo/todoState';

on(increment)
.debounce(1000)
.effect((action, getStaate)=>{
  addTodo(`Count at ${getStaate().counter.count}`);
})