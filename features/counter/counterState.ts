import { createReducer, PayloadAction } from 'orbit-redux';
export interface CouterState {
  count: number;
  loading: boolean;
}
export const counterSlice = createReducer({
  name: 'counter',
  initialState: { count: 0, loading: false },
  reducers: {
    increment(state, action: PayloadAction<number>) {
      return { count: state.count + action.payload, loading: false };
    },
    decrement(state) {
      return { count: state.count - 1, loading: false };
    },
    loading(state) {
      return { ...state, loading: true };
    },
  },

  effects: {
    async asyncInc(dispatch) {
      dispatch(loading());
      await new Promise((resolve) =>
        setTimeout(() => dispatch(increment(20)), 1000)
      );
    },
  },
});

export const { increment, decrement, loading, asyncInc } = counterSlice.actions;
