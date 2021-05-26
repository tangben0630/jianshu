import React from 'react'
import { Test } from '../context'
class List extends React.Component {
  render() {
    return (
      <Test.Consumer>
        {
          (value) => {
            return <div>{value.name}</div>
          }
        }
      </Test.Consumer>
    )
  }
}

export default List

