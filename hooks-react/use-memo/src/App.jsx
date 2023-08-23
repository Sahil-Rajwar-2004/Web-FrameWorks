import './App.css'
import Comp from './components/SqrdVal'
import { useState } from 'react'

function App() {
  const [value,setValue] = useState(0);

  function take_input(event){
    const val = parseFloat(event.target.value);
    setValue(val);
  }

  return (
    <>
      <input type="text" placeholder="number?" onChange={take_input}/>
      <Comp value={value}/>
    </>
  )
}

export default App
