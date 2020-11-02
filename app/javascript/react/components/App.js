import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './LandingPage';
import CollectionContainer from '../containers/CollectionContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/photos/shared/:id" component={CollectionContainer} />
        {/* <Route exact path="/photos?shared" component={CollectionContainer} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
