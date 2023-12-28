import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const billStore= createSlice({
  name:"bill",
  initialState:{
    billList:[]
  },
  reducers:{
    setBillList(state,action){
      state.billList=action.payload
      console.log(state.billList,"===")
    }
  }
})

const {setBillList} =billStore.actions
const getBillList=()=>{
  return async (dispatch)=>{
    const res=await axios.get("http://localhost:8888/billList")
    console.log(res.data,"===res")
    dispatch(setBillList(res.data))
  }
}
export {getBillList}

const reducer= billStore.reducer
export default reducer