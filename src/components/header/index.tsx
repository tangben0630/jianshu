import React from 'react';
import { useHistory } from 'react-router-dom'

import './index.less'
import { aaa } from '../Btn';

interface Props {
  title: string;
  con: string;
  btn: string;

}

const Hoader: React.FC<Props> = (props: Props): JSX.Element => {

  let his = useHistory()
  function aaa() {
    console.log(his, '---');

    his.push('/login')
  }
  return (
    <div className="header">
      <div className="left">{props.title}</div>
      <div className="mid">{props.con}</div>
      <div className="btn" onClick={() => { aaa() }}>
        <span>{props.btn}</span>
      </div>
    </div>
  )
}


export default Hoader