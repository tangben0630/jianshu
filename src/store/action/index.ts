import { SET, DEL } from './actionType'



export function set(v: string): any {
  return {
    type: SET,
    v
  }
}

export function del(v: any) {
  return {
    type: DEL,
    v
  }
}