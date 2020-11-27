import { createStore } from 'redux'
import { fn } from './reducer'
//创建store
const store = createStore(fn) //把记录当作参数传入



export default store