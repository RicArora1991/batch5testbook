import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {incNumber, decNumber } from './action'

function App() {

const disptach=useDispatch();
const changetheNumber=useSelector(state=>state.changeTheNumber)
  return (
  <div>
    <h1>Redux in React App</h1>
    <div>
      <a href='#' title='increment' onClick={()=>disptach(decNumber())}>Decrement</a>
      <input type="text" value={changetheNumber} />
      <a href='#' title='increment' onClick={()=>disptach(incNumber())}>Increment</a>

    </div>
  </div>
  )
}

export default App
