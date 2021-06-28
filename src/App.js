import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import LogIn from "./LoginButton.js";
import { withAuth0 } from '@auth0/auth0-react';
import HomePage from './HomePage';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Profile from "./Profile.js"

class App extends React.Component {

  render() {

    return(
      <>
        <Router>

<Header />
<Switch>
  <Route exact path="/">
    {this.props.auth0.isAuthenticated ? <Profile /> : <HomePage />}

  </Route>
 
  {/* <Route path="/SportPage">
    <div className="App">
      <SportPage />
    </div>

  </Route> */}
  <Route path="">

  </Route>


</Switch>
<Footer />

</Router>
      </>
    )
  }
}

export default withAuth0(App);
