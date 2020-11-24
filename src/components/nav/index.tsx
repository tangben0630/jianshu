import React from 'react'
import './index.less'

interface Iprops {
  title: string;
}
const Nav: React.FC<Iprops> = (props: Iprops): JSX.Element => {

  const list = ['摄影', '故事', '手绘', '读书', '自然科普',]
  function select(num: number) {
    console.log(num, '=====');

  }
  const listItem = list.map((item, i) => (
    <div className="nav-i" onClick={() => { select(i) }} key={item}>{item}</div>
  ))
  return (
    <div className="nav">
      <h5>{props.title}</h5>
      <div className="nav-w">
        {listItem}
      </div>
    </div>
  )
}

export default Nav