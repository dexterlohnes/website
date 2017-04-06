require('es6-promise').polyfill()

import React from 'react'

import routes from './routes'
// import render, {
//     setupReducers,
//     replaceReducers,
// } from '@sketchpixy/rubix/lib/node/redux-router'

import reducers from './reducers'
import setupReact from './setup'

// Instead of doing the following:
// import MMUApp from './reducers'
// let store = createStore(MMUApp)
// Also wraps the app in the Provider component, no more need to do it manually in routes
// setupReducers(reducers)
setupReact()

render(routes, () => {
    console.log('Completed rendering!')
});

if (module.hot) {
    module.hot.accept('./routes', () => {
        // reload routes again
        require('./routes').default;
        render(routes);
    });

    module.hot.accept('./reducers', () => {
        // reload reducers again
        let newReducers = require('./reducers');
        replaceReducers(newReducers);
    });
}
