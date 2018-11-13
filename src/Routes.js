import React from 'react';
import { Route, Switch } from 'react-router'
import Home from './containers/Home'


const Routes = () => (
  <div>
    <main>
      <div className="container">
        <Route exact path="/" component={Home} />
      </div>
    </main>
  </div>
)

export default Routes;