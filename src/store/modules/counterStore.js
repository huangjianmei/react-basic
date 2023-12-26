import {createSlice} from "@reduxjs/toolkit"

const counterStore=createSlice({
  name:"counter",
  // 初始化state
  initialState:{
    count:0,
  },
  // 修改状态的方法 同步方法 支持直接修改
  reducers:{
    inscrement(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    addToNum(state,action){
      state.count=action.payload
    }
  }
})

// 解构出来actionCreater函数
const {inscrement,decrement,addToNum} = counterStore.actions
const reducer = counterStore.reducer
export {inscrement,decrement,addToNum}
export default reducer