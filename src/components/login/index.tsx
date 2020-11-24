import React from 'react'
import store from '../../store'
import './index.less'

interface Props {
  username: string,
  password: string
}

class Login extends React.Component {
  constructor(props: Props) {
    console.log(store.getState(), 'ssss');

    super(props)
    this.state = {
      aaa: 1,
      age: 3
    }
    // store.subscribe()
  }

  change() {
    const action = {
      type: 'add',
      value: this.state.aaa++
    }
    store.dispatch(action)
    console.log(store.getState().age, 'jjj');
    this.setState({
      age: store.getState().age
    })
  }


  render() {
    console.log('render');
    return (
      <div className="aa" onClick={() => {
        this.change()
      }}>
        <div className="l-wrap">

          <input type="text" placeholder="请输入号码" />
          <input type="text" placeholder={this.state.age} />
          <div className="l-btn">登陆</div>
        </div>
      </div>
    )
  }


}

export default Login