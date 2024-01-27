import { Dispatch } from "react";

type ReRenderFn = () => void;

interface Baguni<T> {
  data: {
    state: T;
    reRenderFns: ReRenderFn[];
  };
  joinReRender: (reRender: ReRenderFn) => void;
  cancelReRender: (reRender: ReRenderFn) => void;
  get: () => T;
  set: (newState: T) => void;
}

export function createBaguni<T>(initState?: T): Baguni<T>;
export function useBaguni<T>(globalState: Baguni<T>): [T, Dispatch<any>];
