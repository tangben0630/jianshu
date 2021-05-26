import React from 'react';
export interface ContextState {
  name: string,
  num: number,
  fn?: Function
}
const defaultValue = {
  name: '数据',
  num: 2
}

export const Test = React.createContext(defaultValue)