import { Input } from "./components/Inputs"
import { Button } from "./components/Btn";
import React from "react";
import "./app.css"

function App(){
  const [inputVal,setInputVal] = React.useState("");
  const [displayVal,setDisplayVal] = React.useState("");

  const handleInputs = (val) => {
    console.log(`value is ${val}`);
    setInputVal(val)
  };

  const handleDisplay = () => {
    setDisplayVal("")
    setDisplayVal(inputVal)
  }

  return (
    <div className="container">
      <h1>Display: {displayVal}</h1>
      <div>
        <Input placeholder="type something..." onChange={handleInputs}/>
        <Button onClick={handleDisplay} children="Click"/>
      </div>
    </div>
  )
}

export default App
