import React from 'react';
import Hoader from './components/header'
import Nav from './components/nav'
import List from './components/list'
import Login from './components/login'
import Detail from './components/detail/detail'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { useSelector, useDispatch, Provider } from 'react-redux'
import store from './store'
import './index.less'




function App() {
  return <BrowserRouter>
    <Provider store={store}>
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
    </Provider>
  </BrowserRouter>

}

export default App;
