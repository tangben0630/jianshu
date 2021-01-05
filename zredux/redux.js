import { createStore } from './createStore.js'
let initState = {
	counter:{
		count:0
	},
	info:{
		name:'',
		desc:''
	}
}

console.log(909)
let store = createStore(initState)

store.subscribe(()=>{
	let state = store.getState()
	console.log(state,'-----')
})

store.changeState({
	...store.getState(),
	info:{
		name:'qqq',
		desc:'123'
	}
})