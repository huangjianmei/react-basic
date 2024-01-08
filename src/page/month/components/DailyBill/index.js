import classNames from 'classnames'
import { useState,useMemo } from 'react'
import { billTypeToName } from '@/contant/billList'
import Icon from '@/components/Icon'
import './index.scss'

const DailyBill = ({ date, overview, billList }) => {
  const dayResult=useMemo(()=>{
    if(!billList) return    
    // 支出 / 收入 / 结余
    const pay=billList.filter(item=>item.type==="pay").reduce((a,c)=>a+c.money,0)
    const income=billList.filter(item=>item.type==="income").reduce((a,c)=>a+c.money,0)
    return {
      pay,
      income,
      total: pay+income
    }
  },[billList])

  const [expand, setExpand] = useState(true)
  return (
    <div className={classNames('dailyBill', expand && 'expand')}>
      <div className="header">
        <div className="dateIcon" onClick={() => setExpand(!expand)}>
          <span className="date">{date}</span>
          <Icon
            type="arrowcircle"
            className={classNames('icon', expand && 'expand')}
          />
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{Math.abs(dayResult.pay.toFixed(2))}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{dayResult.total.toFixed(2)}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>

      <div className="billList">
        {billList&&billList.length>0&&billList.map(item => {
          return (
            <div className="bill" key={item.id}>
              <div className="icon">
                <Icon type={item.useFor} />
              </div>
              <div className="detail">
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames('money', item.type)}>
                {item.money.toFixed(2)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DailyBill
