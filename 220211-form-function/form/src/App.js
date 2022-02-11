import { useState, useRef } from 'react'
import Label from './Label'

let renderCount = 0

function App() {
  renderCount++
  console.log("renderCount", renderCount);
  
  // const inputRef = useRef()
  const [ text, setText ] = useState("initial")
  console.log("text:", text);
  

  function changeText(event) {
    // console.log("changeText called", event);
    
    const newText = event.target.value
    // const newText = inputRef.current.value
    setText(newText)
  }

  return (
    <form>
      <label>
        Input: 
        <input
          type="text"
          value={text}
          onChange={changeText}
        ></input>
      </label>

<br />
<br />

      <label htmlFor="check">
        Checkbox:
        <input id="check" type="checkbox"></input>
      </label>     
    </form>
  );
}

export default App;
