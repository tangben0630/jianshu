import React from 'react';
// import Btn, { btnSize, btnType, aaa } from './components/Btn'
import Hoader from './components/header'
import Nav from './components/nav'
import List from './components/list'
import Login from './components/login'
import './index.less'



function App() {
  return (
    <div className="App">
      <Hoader title={'简书'} con={'创作你的创作'} btn={'登陆'}></Hoader>
      <Nav title={'热门专题'} />
      <List />
      <Login />
    </div>
  );
}

export default App;
