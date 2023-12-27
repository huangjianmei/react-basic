import {useSearchParams,useParams} from "react-router-dom"

function Article(){
  // searchParams传参
  const [param]=useSearchParams()
  const id = param.get('id')
  const name = param.get('name')

  const params=useParams()
  return(
    <div>
      <p>这是文章页</p>
      <div>searchParams传参: {id}--{name}</div>
      {/* 路由路径需要修改
          path:"/article/:id/:name"
       */}
      <div>Params传参: {params.id}--{params.name}</div>
    </div>
    
  )
}
export default Article