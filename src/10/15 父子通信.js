import {useState} from "react"

function Son(props){
  console.log(props,"=====props")
  const sonMsg="this si son msg"
  const {onGetSonMsg} = props
  return (
    <div>
      this is son. {props.name}
      <button onClick={()=>onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

function App() {
  const name="hello,this is App name"
  const [msg,setMsg]=useState("")
  const getMsg=(msg)=>{
    setMsg(msg)
  }

  return(
    <div>
      父子传参{msg}
      <Son name={name} onGetSonMsg={getMsg}/>
    </div>
  )
}


export default App;
