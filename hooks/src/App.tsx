import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [count,setCount] = useState(0);

  //  @param effect — Imperative function that can return a cleanup function
  //  @param deps — If present, effect will only activate if the values in the list change.
  useEffect(() => {
    document.title = `Count: ${count}`;
  },[count])

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App
