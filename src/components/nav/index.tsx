import React from 'react'
import { useDispatch } from 'react-redux'
import './index.less'

interface Iprops {
  title: string;
}
const Nav: React.FC<Iprops> = (props: Iprops): JSX.Element => {
  const dispatch = useDispatch()
  const list = ['摄影', '故事', '手绘', '读书', '自然科普',]
  function select(num: number) {
    console.log(num, '=====');

  }
  function nihao() {
    const action = {
      type: 'SET',
      v: "嘉文四世"
    }
    dispatch(action)
  }
  const listItem = list.map((item, i) => (
    <div className="nav-i" onClick={() => { select(i) }} key={item}>{item}</div>
  ))
  return (
    <div className="nav">
      <h5 onClick={() => { nihao() }}>{props.title}</h5>
      <div className="nav-w">
        {listItem}
      </div>
    </div>
  )
}

export default Nav