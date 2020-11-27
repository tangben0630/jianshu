import React from 'react';
import { useHistory } from 'react-router-dom'
import store from '../../store'
import './index.less'
interface Props {
  title: string;
  con: string;
  btn: string;
}
const unsubscribe = store.subscribe(() =>
  console.log(store.getState(), '============999===')
)

const Hoader: React.FC<Props> = (props: Props): JSX.Element => {
  const name: any = store.getState()
  console.log(name, 'name');
  let his = useHistory()
  function aaa() {
    his.push('/login')
  }
  return (
    <div className="header">
      <div className="left">{props.title}</div>
      <div className="mid">{name.name}</div>
      <div className="btn" onClick={() => { aaa() }}>
        <span>{props.btn}</span>
      </div>
    </div>
  )
}
unsubscribe()



export default Hoader