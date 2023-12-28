import {createHashRouter} from "react-router-dom"
import Login from "../page/login"
import Article from "../page/article"
import Layout from "../page/layout"
import Board from "../page/board"
import About from "../page/about"
import NotFound from "../page/notFound"
import Month from "@/page/month"
import New from "@/page/new"
import Year from "@/page/year"

const router = createHashRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Month/>
      },
      {
        path:"/year",
        element:<Year/>
      },
      {
        path:"/new",
        element:<New/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },
  {
      path:"/login",
      element:<Login/>
  },
  {
      // searchParams传参
      path:"/article",
      // Params传参
      // path:"/article/:id/:name",
      element:<Article/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
])

export default router