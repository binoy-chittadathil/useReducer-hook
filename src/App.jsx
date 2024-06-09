
import { useReducer } from 'react'
import usingReducer from './reducer/usingReducer'
import './App.css'

const value={
  count:0,
  isColor:false
}
function App() {
  const [state,dispatch]=useReducer(usingReducer,value)

  return (
    <div style={{width:600,height:600,backgroundColor:state.isColor ? 'green' : 'yellow'}}>
      <button onClick={()=>dispatch({
        type:'changeCount',
        payload:-1
      })}>-</button>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({
        type:'changeCount',
        payload:1
      })}>+</button> <br /> <br />
      <button onClick={()=>dispatch({
        type:'changeColor',
        payload:!state.isColor
      })}>change color</button>
    </div>
  )
}

export default App
