import "./06 style.css"

const cssStyle={
  color:'pink',fontSize:'40px'
}
function App() {
  return (
    <div className="App">
      <span style={{color:'yellowgreen',fontSize:'24px'}}>行内样式</span>
      <span style={cssStyle}>行内样式</span>
      <hr/>
      <span className="foo">通过类名控制样式</span>
    </div>
  );
}

export default App;
