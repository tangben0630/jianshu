import React from 'react'
import store from '../../store'
import {Link} from 'react-router-dom'
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
      value: this.state
    }
    store.dispatch(action)
    console.log(store.getState().age, 'jjj');
    this.setState({
      age: store.getState().age
    })
  }

  back() {
    console.log(this.props, '=====');
  }


  render() {
    console.log('render');

    return (
      <div className="aa" onClick={() => {
        this.change()
      }}>
        <div className="back" onClick={() => { this.back() }}>
          
          <Link to={'/index'}>返回</Link>
          </div>
        <div className="l-wrap">

          <input type="text" placeholder="请输入号码" />
          <input type="text" />
          <div className="l-btn">登陆</div>
        </div>
      </div>
    )
  }


}

export default Login