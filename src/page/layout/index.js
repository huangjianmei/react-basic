import { Outlet} from "react-router-dom"
import { Button } from 'antd-mobile'
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import {getBillList} from "@/store/modules/billStore"

const Layout=()=>{
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getBillList())
  },[dispatch])

  return (
    <div>
   
      这是一级路由layout
      {/* <Link to="/board">面板</Link>
      <Link to="/about">关于</Link> */}
      <Button color="primary">全局</Button>
      <div className="puple">
        <Button color="primary">局部</Button>
      </div>
      <Outlet/>
    </div>
  )
}
export default Layout