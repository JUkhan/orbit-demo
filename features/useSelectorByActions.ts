import { ActionParam, useOrbitEffect } from 'orbit-redux';
import { useState } from 'react';
import { useStore } from 'react-redux';

export default function useSelectorByActions<S = any, TSelected = any>(
  acions: ActionParam,
  selector: (state: S) => TSelected,
  equalityFn: (left: TSelected, right: TSelected) => boolean = (left, right) =>
    left === right
) {
  const store = useStore();
  const [selectedState, setState] = useState(selector(store.getState()));
  let oldState = selectedState;
  useOrbitEffect(acions, () => {
      const newState = selector(store.getState());
      if (!equalityFn(newState, oldState)) {
        setState(newState);
        oldState = newState;
      }
  });

  return selectedState;
}
