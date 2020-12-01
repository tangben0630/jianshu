
import { SET, DEL } from './action/actionType'
const _state = {
  name: '创作你的创作',
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
      console.log('r--22222');
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