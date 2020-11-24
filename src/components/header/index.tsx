import React from 'react';
import './index.less'

interface Props {
  title: string;
  con: string;
  btn: string;

}

const Hoader: React.FC<Props> = (props: Props): JSX.Element => {

  return (
    <div className="header">
      <div className="left">{props.title}</div>
      <div className="mid">{props.con}</div>
      <div className="btn">
        <span>{props.btn}</span>
      </div>
    </div>
  )
}


export default Hoader