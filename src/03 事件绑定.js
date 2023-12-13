function App() {
  const handleClick = ()=>{
    console.log("button被点击了")
  }
  const handleClick1 = (e)=>{
    console.log(e.target)
  }
  const handleClick2 = (name)=>{
    console.log(name,"自定义参数")
  }
  const handleClick3 = (name,e)=>{
    console.log(name,e.target)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>button被点击了</button>
      <hr/>
      <button onClick={handleClick1}>事件参数e</button>
      <hr/>
      <button onClick={()=>handleClick2('Mary')}>自定义参数</button>
      <hr/>
      <button onClick={(e)=>handleClick3('Mary',e)}>既要自定义参数，又要参数e</button>
    </div>
  );
}

export default App;
