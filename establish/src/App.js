import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './components/footer'

import Category from './routes/Category';
import Resource from './routes/Resource';
import Main from './routes/Main';


import './App.css';

const App = props =>
  <>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/category/:name' component={Category} />
      <Route path='/resource/:categoryName/:subcategoryName/:resourceName' component={Resource} />
    </Switch>

    <Footer />
  </>


export default App
