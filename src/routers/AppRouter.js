import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import MyApp from '../components/MyApp';
import FirebaseApp from '../components/FirebaseApp';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={MyApp} exact />
        <Route path="/firebase" component={FirebaseApp} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
