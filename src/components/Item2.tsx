import React from 'react'
import './aaa.css'
interface Props {
  name: string,
  id?: number
}
const Item2: React.FC<Props> = (props) => {
  return <li className="bac" key={props.name}>{props.name}</li>
};

export default Item2