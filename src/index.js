
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loja from './components/Loja';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login';


ReactDOM.render(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Loja} />
      <Route path="/login" exact={true} component={Login} />
    </Switch>
  </BrowserRouter>

    , document.getElementById('root'));

serviceWorker.unregister();
