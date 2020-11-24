import React, { useEffect } from 'react'

const Mouse: React.FC = () => {
  console.log(111);

  useEffect(() => {
    console.log(2222);

    setTimeout(() => {
      // alert()
    }, 3000)
  })
  console.log(4444);

  return (
    <div>000</div>
  )
}


export default Mouse