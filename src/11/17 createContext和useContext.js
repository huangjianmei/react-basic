import {useState,createContext,useContext} from "react"
const msgContext=createContext()

function A(){
  return (
    <div>
      this is A component
      <B/>
    </div>
  )
}
function B(){
  const msg = useContext(msgContext)
  return (
    <div>
      this is B component,,
      {msg}
    </div>
  )
}

function App() {
  const msg="this is app msg"
  return(
    <msgContext.Provider value={msg}>
      <div>
        createContext,useContext
        <hr/>
        <hr/>
        this is App
        <A />
      </div>
    </msgContext.Provider>
  )
}


export default App;
