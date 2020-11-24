import { createStore } from 'redux'
import Reducer from './reducer'
//创建store
const store = createStore(Reducer) //把记录当作参数传入



export default store