import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const foodStore=createSlice({
  name:"foods",
  initialState:{
    foodsList:[],
    activeIndex:0,
    cartList:[],
  },
  reducers:{
    // 获取商品列表
    getFoods(state,action){
      state.foodsList=action.payload
    },
    // 更改activeIndex
    setActiveIndex(state,action){
      state.activeIndex=action.payload
    },
    // 添加购物车
    addCart(state,action){
      // 是否添加过，添加过+1，没有则把商品添加到购物车
      const item = state.cartList.find(item=>item.id===action.payload.id)
      console.log(item)
      if(item){
        item.count++
      }else{
        state.cartList.push(action.payload)
      }
    },
    // 增加数量
    increCart(state,action){
      const item=state.cartList.find(item=>item.id===action.payload.id)
      item.count++
    },
    // 删除数量
    decreCart(state,action){
      // const item=state.cartList.find(item=>item.id===action.payload.id)
      // if(item.count===0) return
      // item.count--
      state.cartList.forEach((item,i)=>{
        if(item.count===0) return
        item.id===action.payload.id && item.count--
        if(item.count===0){
          state.cartList.splice(i,1)
        }
      })
    },
    // 清空购物车
    clearCart(state){
      state.cartList=[]
    }
  }

})

const reducer = foodStore.reducer
const {getFoods,setActiveIndex,addCart,increCart,decreCart,clearCart} = foodStore.actions
const fetchFoods= ()=>{
  return async (dispatch)=>{
    const res= await axios.get("http://localhost:3005/takeaway")
    dispatch(getFoods(res.data))
  }
  
}

export {fetchFoods,setActiveIndex,addCart,increCart,decreCart,clearCart}
export default reducer
