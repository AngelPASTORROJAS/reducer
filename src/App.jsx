import { useReducer, useState } from 'react'
import './App.css'
import Find from './Find'

//Le state initial doit être un object
const initialState = {
  count:0,
  mesage: ""
}

//gérer toutes les actions possibles sur la state
const reducer = (state, action) => {
  switch (action.type) {
    case "incr":
      return {...state, count: state.count+1}
    case "decr":
      return {...state, count: state.count-1}
    case "number":
      return {...state, count: action.nb}
    case "reset":
      return {...state, count: 0}
    default:
      break;
  }
}

function App() {
  const [state, dispacth] = useReducer(reducer, initialState)

  return (
    <>
         <Find />
    Counter : {state.count}
    <button onClick={()=> dispacth({type:"decr"})}>-</button>
    <button onClick={()=> dispacth({type:"incr"})}>+</button>
    <button onClick={()=> dispacth({type:"number", nb: 30})}>Mettre à 30</button>
    <button onClick={()=> dispacth({type:"reset"})}>Reset</button>
    </>
  )
}

export default App
