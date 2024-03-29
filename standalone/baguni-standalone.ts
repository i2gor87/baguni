import { Dispatch, useEffect, useState } from "react";

type ReRenderFn = () => void;

interface BState<T> {
  data: {
    state: T;
    reRenderFns: ReRenderFn[];
  };
  joinReRender: (reRender: ReRenderFn) => void;
  cancelReRender: (reRender: ReRenderFn) => void;
  get: () => T;
  set: (newState: T) => void;
}

function createBState<T>(initState: T = null as unknown as T): BState<T> {
  const prototype = {
    data: { state: initState, reRenderFns: [] as ReRenderFn[] },

    get() {
      return this.data.state;
    },

    set(newState: T) {
      if (newState === this.data.state) return;
      this.data.state = newState;
      this.data.reRenderFns.forEach((reRender) => reRender());
    },

    joinReRender(reRender: ReRenderFn) {
      if (this.data.reRenderFns.includes(reRender)) return;
      this.data.reRenderFns.push(reRender);
    },

    cancelReRender(reRender: ReRenderFn) {
      this.data.reRenderFns = this.data.reRenderFns.filter(
        (reRenderFn) => reRenderFn !== reRender
      );
    },
  };

  return Object.freeze(Object.create(prototype));
}

export function useBState<T>(BState: BState<T>): [T, Dispatch<any>] {
  const [, set] = useState<T>(BState.get());
  const state = BState.get();

  const reRender = () => set({} as T);

  useEffect(() => {
    BState.joinReRender(reRender);
    return () => {
      BState.cancelReRender(reRender);
    };
  }, [BState]);

  function setState(newState: T) {
    BState.set(newState);
  }

  return [state, setState];
}
