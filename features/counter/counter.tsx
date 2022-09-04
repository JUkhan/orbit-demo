import React from 'react';
import { useAppSelector } from '../store';
import { asyncInc, decrement, increment } from './counterState';
import { useOrbitEffect } from 'orbit-redux';
import '../effects';

export default () => {
  useOrbitEffect(decrement, (dispatch, _, action) => {
    console.log(action)
  });
  const { count, loading } = useAppSelector(state => state.counter);

  return <div>
    <h1>Counter</h1>
    <button onClick={() => increment(10)}>increment</button>
    <button onClick={() => decrement()}>decrement</button>
    <button onClick={() => asyncInc()}>
      {loading ? 'loading...' : 'asyncInc'}
    </button>
    <b>{count}</b>
  </div>
}
