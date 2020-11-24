//这个文件  才是真正管理数据跟逻辑的
const defaultValue: any = {
  name: 'yangshuyu',
  age: 6
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any = defaultValue, action: any) => {
  // reducer,可以寄接收state，但是不能修改它
  const newState = JSON.parse(JSON.stringify(state))
  const type = action.type
  if (type === 'add') {
    newState.age = action.value
    return newState
  }
  return state
}