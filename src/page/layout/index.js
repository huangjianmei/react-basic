import { Link,Outlet} from "react-router-dom"

function Layout(){
  return (
    <div>
      这是一级路由layout
      <Link to="/board">面板</Link>
      <Link to="/about">关于</Link>
      <Outlet/>
    </div>
  )
}
export default Layout