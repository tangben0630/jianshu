import React, { useState } from 'react';
import { Test, ContextState } from './context'
import List from './components/List'
import Banner from './components/Banner'
function App() {
  const value: ContextState = {
    name: 'app,state下的数据，点击banner想修改他',
    num: 2,
    fn: () => {
      console.log('fn');
    }
  }
  const [con, setCon] = useState<any>(value)

  return <Test.Provider value={con}>
    <List></List>
    <Banner></Banner>
  </Test.Provider>


}

export default App;
