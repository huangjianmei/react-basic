import {useState} from "react"

function App() {
  const [count,setCount] = useState(0);
  const handleClick=()=>{
    setCount(count+1)
  }

  const [form,setForm] = useState({
    name:"haha",
    age:20
  })
  const changeForm =()=>{
    setForm({
      ...form,
      name:"hjm"
    })
  }
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <hr/>
      <button onClick={changeForm}>修改{form.name}</button>
    </div>
  );
}

export default App;
