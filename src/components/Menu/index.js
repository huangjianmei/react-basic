import classNames from 'classnames'
import './index.scss'
import {fetchFoods,setActiveIndex} from '../../store/modules/takeaway'
import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"

const Menu = () => {
  const {foodsList,activeIndex}=useSelector(state=>state.food)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchFoods())
  },[])
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            onClick={()=>dispatch(setActiveIndex(index))}
            className={classNames(
              'list-menu-item',
              activeIndex===index&&'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
