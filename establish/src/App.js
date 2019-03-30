import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './screens/Home'
import Category from './screens/Category'
import Resource from './screens/Resource'

import Favorites from './screens/Favorites'
import Notifications from './screens/Notifications'
import Settings from './screens/Settings'

const App = ({data}) => <>
    <Switch>
      <Route exact path='/' render={(props) => <Home {...props} data={data} />}/>
      <Route path='/category/:categoryId/:categoryName' render={props => <Category {...props} data={data} />}/>
      <Route path='/resource/:categoryId/:categoryName/:resourceId/:resourceName' render={props => <Resource {...props} data={data} />}/>

      <Route path='/favorites' render={props => <Favorites {...props} data={data} />} />
      <Route path='/notifications' render={Notifications} />
      <Route path='/settings' render={Settings} />
    </Switch>
  </>


export default App
