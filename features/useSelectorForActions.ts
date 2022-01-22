import { ActionParam, useOrbitEffect } from 'orbit-redux';
import { useState } from 'react';
import { useStore } from 'react-redux';

export function useSelectorForActions<S = any, TSelected = any>(
  acions: ActionParam,
  selector: (state: S) => TSelected,
  equalityFn: (left: TSelected, right: TSelected) => boolean = (left, right) =>
    left === right
) {
  const store = useStore();
  const [selectedState, setState] = useState(selector(store.getState()));
  let oldState = selectedState;
  useOrbitEffect(acions, () => {
    setTimeout(() => {
      const newState = selector(store.getState());
      if (!equalityFn(newState, oldState)) {
        setState(newState);
        oldState = newState;
      }
    }, 0);
  });

  return selectedState;
}