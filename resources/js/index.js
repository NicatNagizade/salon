import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {Home, Login, Register, Header, NotFound,Test} from './views'
import IndexProvider from './contexts';

export default function Index () {
    return (
        <Router>
            <IndexProvider>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/test" component={Test} />
                    <Route path="" component={NotFound} />
                </Switch>
            </IndexProvider>
        </Router>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}