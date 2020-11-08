import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import ImageUpload from './Components/Upload/ImageUpload';
import UserDetail from './Components/User/UserDetail';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeComponent />
          </Route>
          <Route path="/users" exact>
            <UserDetail />
          </Route>
         <Route path="/upload">
          <ImageUpload />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
