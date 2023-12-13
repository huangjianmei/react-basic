const isLogin=true
const type=0 //0 1 3

function getTypeMsg(){
  if(type===0){
    return <div>这是单图模式</div>
  }else if(type===1){
    return <div>这是双图模式</div>
  }else{
    return <div>这是多图模式</div>
  }
}

function App() {
  return (
    <div className="App">
      {/* 逻辑与 && */}
      {isLogin && <span>this is span</span>}
      <hr/>
      {/* 三目运算符 */}
      {isLogin?<span>isLogin is true</span>:<span>isLogin is false</span>}

      <hr/>
      {/* 复杂情况 */}
      { getTypeMsg() }
    </div>
  );
}

export default App;
