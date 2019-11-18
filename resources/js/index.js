import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Login from './pages/auth/login';
import NotFound from './pages/not_found';
import Home from './pages/home';

export default function Index () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route path="" component={NotFound} />
            </Switch>
        </Router>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}