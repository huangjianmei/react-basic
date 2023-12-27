import {createHashRouter} from "react-router-dom"
import Login from "../page/login"
import Article from "../page/article"
import Layout from "../page/layout"
import Board from "../page/board"
import About from "../page/about"
import NotFound from "../page/notFound"

const router = createHashRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Board/>
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