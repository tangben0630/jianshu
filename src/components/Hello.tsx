import React from 'react'
interface HelloProps {
  msg?: string,
  num?: number
}
const Hello: React.FC<HelloProps> = (props) => {
  return (
    <div>{props.msg}
      <span></span>
    </div>
  )
}
Hello.defaultProps = {
  msg: "好强大啊！！！！"
}

export default Hello