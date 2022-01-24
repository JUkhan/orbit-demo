import { combineReducers, orbit} from 'orbit-redux';
import { counterState } from './counter/counterState';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { todoState, todoFilterState } from './todo/todoState';

export const store = createStore(
  combineReducers({
    [counterState.name]: counterState.reducer,
    [todoState.name]: todoState.reducer,
    [todoFilterState.name]: todoFilterState.reducer,
  }),
  applyMiddleware(orbit)
);

export type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => Dispatch = useDispatch;
