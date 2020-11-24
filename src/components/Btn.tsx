import React from 'react'
import './aaa.css'
export enum btnSize {
  large = 'lg',
  small = 'sm'
}

export enum btnType {
  Primary = 'primary',
  Danger = 'danger'
}

export const aaa = function () {
}



const Btn = (props: any): any => {
  const { btnType, btnSize } = props
  if (btnType) {
    return (
      <button className={`btn btn-${btnType}`}>22222</button>
    )
  }

  if (btnSize) {
    return (
      <button className={`btn btn-${btnSize}`}>2222</button>
    )
  }

}



export default Btn