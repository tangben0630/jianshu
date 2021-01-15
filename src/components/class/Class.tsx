import React from 'react'

interface Props {

}
interface State {
  c: number,
  d: any
}
class Test extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      c: 0,
      d: 0
    }
    this.count = this.count.bind(this)
  }
  count() {
    let c = this.state.c
    c++
    this.setState({
      c: c
    }, () => {
      console.log('666666', this.state.c);
    })
  }
  shouldComponentUpdate(a: State, b: any) {
    console.log('shouldComponentUpdate', a, b, this.state.c);

    return false
  }
  render() {
    return (
      <>
        <div onClick={this.count}>test---- {this.state.c}</div>
      </>
    )
  }
}



export default Test