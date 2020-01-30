// @flow
import type { Color4 } from "types";
import React from "react";
import { RandomRGB } from "fixtures";
class UILayerStateComponent<T> {
  value: T;
  listeners: ((T) => void)[];

  constructor(value: T) {
    this.value = value;
    this.listeners = [];
  }

  set(value: T) {
    this.value = value;
    this.listeners.forEach(x => x(value));
  }

  get(): T {
    return this.value;
  }

  subscribe(callback: T => void): number {
    this.listeners.push(callback);
    callback(this.value);
    return this.listeners.length - 1;
  }

  unsubscribe(i: number): void {
    if (i >= this.listeners.length) {
      throw "call the cops";
    }
    this.listeners.splice(i, 1);
  }
}

export class UILayerState {
  color: UILayerStateComponent<Color4>;

  constructor() {
    this.color = new UILayerStateComponent<Color4>(RandomRGB());
  }
}

const _ = new UILayerState();
export const UILayerStateContext: React$Context<UILayerState> = React.createContext(
  _
);

type Props = {
  state: UILayerState,
  children: React$Node
};
export const UILayerStateContextProvider = (props: Props) => (
  <UILayerStateContext.Provider value={props.state}>
    {props.children}
  </UILayerStateContext.Provider>
);

export const UILayerStateContextConsumer = UILayerStateContext.Consumer;
