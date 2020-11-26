// //这个文件  才是真正管理数据跟逻辑的
// const defaultValue: any = {
//   name: 'yangshuyu',
//   age: 6
// }
// // eslint-disable-next-line import/no-anonymous-default-export
// export default (state: any = defaultValue, action: any) => {
//   // reducer,可以寄接收state，但是不能修改它
//   const newState = JSON.parse(JSON.stringify(state))
//   const type = action.type
//   if (type === 'add') {
//     newState.age = action.value
//     return newState
//   }
//   return state
// }

// export const a = 1
import { set, del } from './action'
import { SET, DEL } from './action/actionType'
const _state = {
  name: '樱木花道',
  age: 16
}

interface Action {
  v?: string;
  type: string
}

function fn(state = _state, action: Action) {
  const newState: object = { ...state }
  switch ((action as any).type) {
    case SET:
      (newState as any).name = action.v
      return newState

    default:
      return newState
  }

}

export default fn



















