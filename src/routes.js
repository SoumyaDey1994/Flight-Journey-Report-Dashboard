import React from 'react';

import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './components/Home/view/home';
import Details from './components/Details/view/details';
import Login from './components/login/login';

global.isLoggedIn = false;  //Initial Logged in flag is false
const Routes = () => {
    return (
        <HashRouter>
           <Switch>
             <Route exact path="/login" name="login" render={() => !global.isLoggedIn ? <Login /> : <Redirect to="/home"/>} />
             <Route exact path="/home" name="Home" render={() => global.isLoggedIn ? <Home /> : <Redirect to="/login" />} />
             <Route exact path="/logout" name="logout" render={() => <Redirect to="/login" />} />
             <Route exact path="/report/:id" name="Details" render={() => global.isLoggedIn ? <Details /> : <Redirect to="/login" />} />
             <Route path="*" name="any" render = {() => global.isLoggedIn ? <Redirect to="/home"/> : <Redirect to="/login"/>} />
           </Switch>
       </HashRouter>
    );
}

export default Routes;