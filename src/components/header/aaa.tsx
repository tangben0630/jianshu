import React from 'react'
import store from '../../store/index'


class Aaa extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      name: (store.getState() as any).name
    }
    this.change = this.change.bind(this)
    const fn = store.subscribe(this.change)
    // fn()
  }

  change() {
    console.log('state, change');
    this.setState(
      {
        name: (store.getState() as any).name
      }
    )
  }


  render() {
    return (
      <div className="aaaa">
        {(this.state as any).name}
      </div>
    )
  }
}

export default Aaa