import React, { useContext } from 'react'
import './aaa.css'
import { dataContext } from './Context'
const Shop: React.FC = () => {
  const value = useContext(dataContext)
  return <>
    <div>购物车</div>
    {
      value.list.map(el => {
        return <li key={el.name}>{el.name}</li>
      })
    }
  </>
};

export default Shop