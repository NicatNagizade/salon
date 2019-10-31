import React from 'react';
import ReactDOM from 'react-dom';

export default function Index () {
    return (
        <div className="container">
            Test
        </div>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}