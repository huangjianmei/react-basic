import {Link,useNavigate} from "react-router-dom"

function Login(){
  const navigate = useNavigate()
  return(
    <div>
      这是登录页

      {/* 声明式的写法 */}
      <Link to="/article">去文章页</Link>
      {/* 命令式的写法 */}
      <button onClick={()=>navigate('/article')}>去文章页</button>
      <button onClick={()=>navigate('/article?id=100&name=jack')}>searchParams传参</button>
      <button onClick={()=>navigate('/article/200/hjm')}>Params传参</button>
    </div>
  )
}

export default Login