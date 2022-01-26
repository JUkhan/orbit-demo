import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { asyncInc, decrement, increment } from './counterState';
import { useOrbitEffect } from 'orbit-redux';
import '../effects';

export default () => {
  useOrbitEffect(decrement, (dispatch, _, action) => {
    console.log(action)
  });
  const { count, loading } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return <div>
    <h1>Counter</h1>
    <button onClick={() => dispatch(increment(10))}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    <button onClick={() => dispatch(asyncInc())}>
      {loading ? 'loading...' : 'asyncInc'}
    </button>
    <b>{count}</b>
  </div>
}
