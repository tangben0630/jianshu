import React from 'react';
import Hoader from './components/header'
import Nav from './components/nav'
import List from './components/list'
import Login from './components/login'
import Detail from './components/detail/detail'
import './index.less'

import { Switch, BrowserRouter, Route, Link, Router } from 'react-router-dom'




function App() {
  return <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path={'/index'}>
          <Hoader title={'简书'} con={'创作你的创作'} btn={'登陆'}></Hoader>
          <Nav title={'热门专题'} />
          <List />
        </Route>
        <Route path={'/login'}>
          <Login />
        </Route>
        <Route path={'/detail'}>
          <Detail title={''}></Detail>
        </Route>

      </Switch>
    </div>
  </BrowserRouter>

}

export default App;
