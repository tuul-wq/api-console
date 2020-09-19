import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';

import Console from '../views/console/console';
import Login from '../views/login/login';

function Routes() {
  return (
    <Router>
      <Switch>
        {/* TODO: isLoggedIn from state? */}
        {/* <Route exact path={['/login', '/console']}>
          { isLoggedIn ? <Console /> : <Login /> }
        </Route> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/console" component={Console} />
        {/* <Redirect to="/login" /> */}
        <Redirect to="/console" />
      </Switch>
    </Router>
  );
}

export default Routes;
