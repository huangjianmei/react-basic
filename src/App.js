const list=[
  {id:1,name:"React"},
  {id:2,name:"vue"},
  {id:3,name:"Angular"}
]

function App() {
  return (
    <div className="App">
      this is App
      <ul>
        {
          list.map(item=><li key="item.id">{item.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
