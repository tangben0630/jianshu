import React from 'react'
interface Props {
  name: string,
  id?: number
}
const Item: React.FC<Props> = (props) => {
  return <li key={props.name}>{props.name}</li>
};

export default Item