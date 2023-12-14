import {useState} from "react"

function App() {
  const [value,setValue] = useState('')
  return (
    <div className="App">
      <input 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        type="text"/>
        {value}
    </div>
  );
}


export default App;
