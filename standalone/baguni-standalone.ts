import { Dispatch, useEffect, useState } from "react";

type ReRenderFn = () => void;

interface GlobalState<T> {
  data: {
    state: T;
    reRenderFns: ReRenderFn[];
  };
  joinReRender: (reRender: ReRenderFn) => void;
  cancelReRender: (reRender: ReRenderFn) => void;
  get: () => T;
  set: (newState: T) => void;
}

function createGlobalState<T>(
  initState: T = null as unknown as T
): GlobalState<T> {
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

export function useGlobalState<T>(
  globalState: GlobalState<T>
): [T, Dispatch<any>] {
  const [, set] = useState<T>(globalState.get());
  const state = globalState.get();

  const reRender = () => set({} as T);

  useEffect(() => {
    globalState.joinReRender(reRender);
    return () => {
      globalState.cancelReRender(reRender);
    };
  }, [globalState]);

  function setState(newState: T) {
    globalState.set(newState);
  }

  return [state, setState];
}

export const AUTH_TOKEN = createGlobalState<string>("");
export const COMPARE_STATE = createGlobalState<number[]>([]);
