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
import { SET, DEL } from './action/actionType'
const _state = {
  name: '樱木花道',
  age: 16
}

// interface Action {
//   v?: string;
//   type?: string
// }

export const fn = function (state: object = _state, action: object) {
  const newState: object = { ...state }
  switch ((action as any).type) {
    case SET:

      (newState as any).name = (action as any).v

      console.log('--set----这个set函数，为什么没执行？', newState);
      return newState

    case DEL:
      (newState as any).age = (action as any).v
      return newState

    default:
      return newState
  }

}

// export default f