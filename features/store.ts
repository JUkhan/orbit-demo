import { combineReducers, orbit} from 'orbit-redux';
import { counterSlice } from './counter/counterState';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { todoSlice, todoFilterSlice } from './todo/todoState';

export const store = createStore(
  combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [todoSlice.name]: todoSlice.reducer,
    [todoFilterSlice.name]: todoFilterSlice.reducer,
  }),
  applyMiddleware(orbit)
);

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => Dispatch = useDispatch;
