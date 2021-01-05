export default function createStore(initState){
  let state = initState
  let listeners = []
  function subscribe(listener){
    listeners.push(listener)
  }
  function getState(){
    return state
  }
  return {
    subscribe
  }
}