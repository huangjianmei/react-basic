import {createBrowserRouter} from "react-router-dom"
import Login from "../page/login"
import Article from "../page/article"

const router = createBrowserRouter([
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
  }
])

export default router