import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'
interface Iprops {
  title: string,
  // time: string,
  // c: number,
  // con: string,
  // f: number
}

const Detail: React.FC<Iprops> = (props: Iprops): JSX.Element => {
  const history = useHistory()
  function back() {
    history.goBack()
  }
  return (
    <div className="detail">
      <div className="d-top" onClick={() => { back() }}>
        返回
      </div>
      <div className="d-con">
        neirong
      </div>
    </div>
  )
}

export default Detail