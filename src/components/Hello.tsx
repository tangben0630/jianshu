import React, { useContext, useState } from 'react'
import { dataContext, setdataContext } from './Context'
import Shop from './Shop'
const Hello: React.FC = () => {
  const value = useContext(dataContext)
  const set = useContext(setdataContext)
  let [num, setnum] = useState(0)
  const add = () => {
    let a = num++
    setnum(num)
    if (set) {
      console.log(a, 'num');

      set(state => {
        const list = state.list
        const obj = {
          id: num,
          name: 'xiaoming' + a
        }
        list.push(obj)
        return {
          list,
          num: num
        }
      })
    }
  }
  return <>
    <div>
      <div className="aaa" onClick={() => { add() }}>
        +
      </div>
      <Shop />
    </div>
  </>
}

export default Hello