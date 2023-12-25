import {useEffect,useState} from "react"

function Son(){
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("设置定时器。。。。")
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[])
  return <div>this is Son</div>
}

function App() {
  const [show,setShow] = useState(true)
  return(
    <div>
      {show&&<Son/>}
      <button onClick={()=>setShow(false)}>卸载son组件</button>
    </div>
  )
}


export default App;
