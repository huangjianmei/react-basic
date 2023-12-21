import {useRef} from "react"

function App() {
  const inputRef=useRef(null)
  const showDom=()=>{
    console.log(inputRef.current.value,"===current")
  }
  return (
    <div className="App">
      <input ref={inputRef} type="text"/>
      <button onClick={showDom}>获取dom</button>
    </div>
  );
}


export default App;
