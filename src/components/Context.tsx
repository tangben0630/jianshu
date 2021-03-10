import React, { useState } from 'react'
interface Props {

}

interface States {
  list: { id: number, name: string }[],
  num: number 
}

const defaultValue: States = {
  list: [],
  num: 0
}

export const dataContext = React.createContext(defaultValue)
export const setdataContext = React.createContext
  <React.Dispatch<React.SetStateAction<States>> | undefined>(undefined)

const Cont: React.FC<Props> = (props) => {
  const [data, setData] = useState(defaultValue)
  return <dataContext.Provider value={data}>
    <setdataContext.Provider value={setData}>
      {props.children}

    </setdataContext.Provider>
  </dataContext.Provider>
}


export default Cont