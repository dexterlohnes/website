import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules/common/components/App'
import HomePage from './modules/home/components/HomePage'
import AboutPage from './modules/common/components/AboutPage'
import NotFoundPage from './modules/common/components/NotFoundPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
