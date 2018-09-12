import React from 'react';
import { Router, Route, Switch } from 'dva/router';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact={false} component={require('./components/Index').default} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
