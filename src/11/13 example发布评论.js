import "../01/07 example.css"
import {useState} from "react"
import _ from "lodash"
const list=[
  {
    rpid:3,
    user:{
      uid:"123123",
      avatar:"../public/1.jpeg",
      uname:"周杰伦"
    },
    content:'哎呦，不错哦',
    ctime:"10-18 08:45",
    like:188
  },
  {
    rpid:2,
    user:{
      uid:"7878998",
      avatar:"../public/1.jpeg",
      uname:"许嵩"
    },
    content:'我寻你千百度 日出到迟暮',
    ctime:"12-18 13:45",
    like:60
  },
  {
    rpid:4,
    user:{
      uid:"343434",
      avatar:"../public/1.jpeg",
      uname:"周深"
    },
    content:'我是周星星',
    ctime:"11-18 13:45",
    like:100
  }
]
const user={
  uid:"7878998",
  uname:"许嵩"
}
const tab = [
  {
    type:"hot",
    text:"最热"
  },
  {
    type:"new",
    text:"最新"
  }
]
function App() {
  const [commentList,setCommentList] = useState(_.orderBy(list,'like','desc'))
  const handleDel=(id)=>{
    console.log(id)
    setCommentList(commentList.filter(item=>item.rpid!==id))
  }

  const [type,setType]=useState('hot')
  const changeType=(type)=>{
    console.log(type,"===tyope")
    setType(type)
    if(type==='hot'){
      setCommentList(_.orderBy(commentList,'like',"desc"))
    }else{
      setCommentList(_.orderBy(commentList,'ctime',"desc"))
    }

  }
  return (
    <div className="App">
      <div className="tab-box">
        <ul className="tab-ul">
          <li className="nav-sort">
          {
            tab.map(item=><span key={item.type} onClick={()=>changeType(item.type)} className={`nac-item ${item.type===type&&'active'}`}>{item.text}</span>)
          }
          </li>
        </ul>
      </div>
      <div className="comment-list">
        {
          commentList.map(item=>(
            <div key={item.rpid} className="list-item"> 
              <div className="item-avatar">
                <img className="item-avatar-img" src={item.user.avatar}/>
              </div>
              <div className="item-content">
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>
                <div className="content-box">
                  <span className="content-info">{item.content}</span>
                  <div className="order-box">
                    <span className="time-box">{item.ctime}</span>
                    <span className="like-box">点赞数：{item.like}</span>
                    {item.user.uid===user.uid&&<span className="del-btn" onClick={()=>handleDel(item.rpid)}>删除</span>}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}


export default App;
