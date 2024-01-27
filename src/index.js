import { useEffect, useState } from "react";

export function createBaguni(inState = null) {
  const prototype = {
    data: { state: inState, reRenderFns: [] },
    get() {
      return this.data.state;
    },
    set(newState) {
      if (newState === this.data.state) return;
      this.data.state = newState;
      this.data.reRenderFns.forEach((reRender) => reRender());
    },
    joinReRender(reRender) {
      if (this.data.reRenderFns.includes(reRender)) return;
      this.data.reRenderFns.push(reRender);
    },
    cancelReRender(reRender) {
      this.data.reRenderFns = this.data.reRenderFns.filter(
        (reRenderFn) => reRenderFn !== reRender
      );
    },
  };
  return Object.freeze(Object.create(prototype));
}

export function useBaguni(bState) {
  const [, set] = useState(bState.get());
  const state = bState.get();
  const reRender = () => set({});
  useEffect(() => {
    bState.joinReRender(reRender);
    return () => {
      bState.cancelReRender(reRender);
    };
  }, [bState]);
  function setState(newState) {
    bState.set(newState);
  }
  return [state, setState];
}
