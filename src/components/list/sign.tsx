import React from 'react'
interface Iprops {
  item: object
}
const Sign: React.FC<Iprops> = (props: any): JSX.Element => {

  return (
    <div className='sign'>
      <span>{props.item.r}</span>
      <span>{props.item.co}</span>
      <span>{props.item.p}</span>
      <span>{props.item.f}</span>
    </div>
  )
}


export default Sign