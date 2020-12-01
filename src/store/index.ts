import { applyMiddleware, createStore } from 'redux'
import { fn } from './reducer'
import thunk from 'redux-thunk'
console.log(thunk, 'thunk');
// thunk()
//创建store
const store = createStore(fn, applyMiddleware(thunk)) //把记录当作参数传入



export default store