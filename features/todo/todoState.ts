import { createSlice, PayloadAction, Data } from 'orbit-redux';

export enum TodoFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}
type Todo={
  id:number,
  text:string,
  completed:boolean
}
export const todoState = createSlice({
  name: 'todos',
  initialState: {todoList:{data:[]} as Data<Todo[]>, filter:TodoFilter.SHOW_ALL},
  reducers: {
    setFilter(state, action: PayloadAction<TodoFilter>) {
      return {...state, filter: action.payload};
    }
  },
  effects:{
    addTodo(action: PayloadAction<string>, put, getState) {
      console.log(action)
      const todos:Todo[]=getState().todos.todoList?.data??[];
      put('todoList', todoPost(action.payload))
    },
    removeTodo(action: PayloadAction<number>, put, getState) {
      const todos:Todo[]=getState().todos.todoList?.data??[];
      put('todoList', todoDelete(action.payload).then(id=>todos.filter(todo=>todo.id!==id)))
    },
    toggleTodo(action: PayloadAction<number>, put, getState) {
      const todos:Todo[]=getState().todos.todoList?.data??[];
      put('todoList', todoPut(action.payload).then(id=>todos.map(todo=>todo.id===id?{...todo, completed:!todo.completed}:todo)))
    }
  }
});

export const { addTodo, removeTodo, toggleTodo, setFilter } = todoState.actions;

function todoPost(text:string){
  return new Promise(resolve=>setTimeout(()=>resolve({ id: Number(new Date()), text, completed: false }),1000))
}

function todoPut(id:number){
  return new Promise(resolve=>setTimeout(()=>resolve(id),1000))
}

function todoDelete(id:number){
  return new Promise(resolve=>setTimeout(()=>resolve(id),1000))
}