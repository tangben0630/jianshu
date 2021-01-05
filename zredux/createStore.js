export default function createStore(initState){
  let state = initState
  let listeners = []
  function subscribe(listener){
    listeners.push(listener)
  }
  function getState(){
    return state
  }
	function changeState(newState){
		listeners.forEach(el=>{
			el()
		})
	}
  return {
    subscribe,
		getState
  }
}