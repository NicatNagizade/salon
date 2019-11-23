import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {Header} from './views'
import IndexProvider from './contexts';
import IndexRoutes from './routes';

export default function Index () {
    return (
        <Router>
            <IndexProvider>
                <Header />
                <IndexRoutes />
            </IndexProvider>
        </Router>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}