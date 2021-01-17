import React, { useContext } from 'react'
import './aaa.css'
import { dataContext } from './Context'
import Item from './item'
import Item2 from './Item2'
const Shop: React.FC = () => {
  const value = useContext(dataContext)
  return <>
    <div>购物车</div>
    {
      value.list.map((el, index) => {
        return index % 2 == 0 ?
          <Item key={el.name} name={el.name} id={el.id}></Item> :
          <Item2 key={el.name} name={el.name} id={el.id}></Item2>
      })
    }
  </>
};

export default Shop