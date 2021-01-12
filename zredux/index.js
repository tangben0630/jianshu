import { createStore } from './createStore'
let initState = {
	counter:{
		count:0
	},
	info:{
		name:'',
		desc:''
	}
}

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