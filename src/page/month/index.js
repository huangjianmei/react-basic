import { DatePicker, NavBar } from 'antd-mobile'
import { useEffect, useMemo,useState } from 'react'
import groupBy from 'lodash/groupBy'
import classNames from 'classnames'
import dayjs from 'dayjs'
import './index.scss'
import _ from "lodash"
import { useLocation } from 'react-router-dom'
import {useSelector} from "react-redux"

const Month =()=>{
  const billList= useSelector(state=>state.bill.billList);
  const monthGroup=useMemo(()=>{
    // return 出去计算后的值
    return _.groupBy(billList,(item)=>dayjs(item.date).format('YYYY-MM'))
  },[billList])
  const { state } = useLocation()
  const [visible, setVisible] = useState(false)
  const [currentDate,setCurrentDate] = useState(()=>{
    return dayjs(new Date()).format('YYYY-MM')
  })

  const [currentMonthList,setMonthList]= useState([])
  const monthResult=useMemo(()=>{
    if(!currentMonthList) return
    console.log(currentMonthList,"==currentMonthList")
    
    // 支出 / 收入 / 结余
    const pay=currentMonthList.filter(item=>item.type==="pay").reduce((a,c)=>a+c.money,0)
    const income=currentMonthList.filter(item=>item.type==="income").reduce((a,c)=>a+c.money,0)
    return {
      pay,
      income,
      total: pay+income
    }
  },[currentMonthList])

  const dateConfirm= (date)=>{
    setVisible(false)
    const formatDate=dayjs(date).format('YYYY-MM')
    setMonthList(monthGroup[formatDate])
    setCurrentDate(formatDate)

  }

  useEffect(() => {
    const nowDate = dayjs().format("YYYY-MM")
    if(monthGroup[nowDate]){
      setMonthList(monthGroup[nowDate])
    }
  }, [monthGroup])
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>

      <div className="content">
        <div className="header">
          <div className="date">
            <span className="text" onClick={()=>setVisible(true)}>
              {currentDate+''}月账单
            </span>
            <span className={classNames('arrow', visible && 'expand')}></span>
          </div>
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={visible}
            max={new Date()}
            onClose={()=>setVisible(false)}
            onCancel={()=>setVisible(false)}
            onConfirm={dateConfirm}
          />
          <div className={classNames('twoLineOverview')}>
            <div className="item">
              <span className="money">{(monthResult&&monthResult.pay.toFixed(2))||0}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{(monthResult&&monthResult.income.toFixed(2))||0}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult&&monthResult.total.toFixed(2)||0}</span>
              <span className="type">结余</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Month
