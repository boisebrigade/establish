import * as serviceWorker from './serviceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { getAllResources } from './contentful'

import App from './App';

import './index.css';
import './App.css'

getAllResources()
  .then(data => {
    ReactDOM.render(
      <BrowserRouter>
        <App data={data} />
      </BrowserRouter>,
      document.getElementById('root'));
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
