import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import Footer from '../component/UI/footer/Footer.jsx';

const Routes = () => (
  <Fragment>
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </div>
    <Footer />
  </Fragment>
);

export default Routes;
