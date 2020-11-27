import React from 'react';
import { useHistory } from 'react-router-dom'
import store from '../../store'
import './index.less'
interface Props {
  title: string;
  con: string;
  btn: string;
}

const Hoader: React.FC<Props> = (props: Props): JSX.Element => {
  let name: any = store.getState()
  const unsubscribe = store.subscribe(nihao)
  console.log(name, 'name');
  let his = useHistory()
  function jump() {
    his.push('/login')
  }
  function nihao() {
    console.log('你好，你什么时候会运行？？？');

  }
  unsubscribe()
  return (
    <div className="header">
      <div className="left">{props.title}</div>
      <div className="mid">{name.name}</div>
      <div className="btn" onClick={() => { jump() }}>
        <span>{props.btn}</span>
      </div>
    </div>
  )
}




export default Hoader