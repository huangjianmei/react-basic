import {useEffect,useState} from "react"

// 自定义hook
function useToggle(){
  // 可复用的逻辑代码
  const [value,setValue] = useState(true)
  const toggle=()=>setValue(!value)
  // 哪些状态和回调函数需要在其他组件中使用 return
  return{
    value,
    toggle
  }
}

// 分装自定义hook通用思路
// 1.声明一个亿use打头的函数
// 2.在函数体内封装可复用的逻辑（只要是可服用的逻辑）
// 3.把组件中用到的状态或者回调return出去（以对象或者数组）
// 4.在那个组件中要用到这个逻辑，就执行函数，解构出来状态和回调进行使用
function App() {
  const {value,toggle} =useToggle()
  return(
    <div>
      {value&&<div>this is value</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}


export default App;
