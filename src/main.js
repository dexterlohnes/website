require('es6-promise').polyfill()

import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {AppContainer} from 'react-hot-loader'
import Root from './root'

import configureStore from './store'
import {syncHistoryWithStore} from 'react-router-redux'
import setupReact from './setup'
require('./favicon.ico'); // Tell webpack to load favicon.ico

setupReact()

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
