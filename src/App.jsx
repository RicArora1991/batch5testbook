import { useDispatch, useSelector } from 'react-redux'
import './App.css'
// import {incNumber, decNumber } from './action'
import { increment,decrement } from './reduxtoolkit/CounterSlice';

function App() {

const disptach=useDispatch();
// const changetheNumber=useSelector(state=>state.changeTheNumber)

const counter=useSelector((state)=>(state.counter.counter))
  return (
  <div>
    <h1>Redux in React App</h1>
    {/* <div>
      <a href='#' title='increment' onClick={()=>disptach(decNumber())}>Decrement</a>
      <input type="text" value={changetheNumber} />
      <a href='#' title='increment' onClick={()=>disptach(incNumber())}>Increment</a>

    </div> */}


    {/* using redux toolkit in react */}

    <a href="#" onClick={()=>disptach(decrement())} className='btn btn-danger'>Decrement</a>
    {counter}
    <a href="#" onClick={()=>disptach(increment())} className='btn btn-success'>Increment</a>

  </div>
  )
}

export default App
