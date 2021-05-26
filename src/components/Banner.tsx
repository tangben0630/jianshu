import React from 'react'
import { Test } from '../context'
const Banner: React.FC = (): JSX.Element => {
  const change = (value: any) => {
    console.log('点击了', value);
    value.fn()
  }
  return <Test.Consumer>
    {
      (value) => <div>
        这是banner
        <div onClick={() => { change(value) }}>dian</div>
      </div>
    }
  </Test.Consumer>
}

export default Banner

