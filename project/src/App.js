import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Home } from './layout/private/Home';
import PrivateRoute from './layout/private/PrivateRoute';
import PublicRoute from './layout/public/PublicRoute';
import Welcome from './layout/public/Welcome';
import LoginForm from './layout/public/Login';
import RegisterForm from './layout/public/Register';
import Database from './layout/private/Database';
import { isLogedIn } from './services/auth.service';
import Top from './layout/private/Top';



function App() {
  return (<>

    <BrowserRouter>
      <Switch>
        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={Database} path="/database" />
        <PrivateRoute component={Top} path="/top" />
        <PublicRoute component={Welcome} path="/welcome" />
        <PublicRoute component={LoginForm} path="/login" />
        <PublicRoute component={RegisterForm} path="/register" />
        <Redirect from="/" to={isLogedIn() ? "/home" : "/welcome"} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
