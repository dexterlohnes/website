import React from 'react'
import {IndexRedirect, Route} from 'react-router'

import App from './modules/common/components/App'
import AboutPage from './modules/common/components/AboutPage'
import NotFoundPage from './modules/common/components/NotFoundPage'
import HomePageContainer from './modules/home/containers/HomePageContainer'
import AuthService from './modules/common/tools/AuthService'
import LoginPageContainer from './modules/home/containers/LoginPageContainer'
import BlockchainContainer from './modules/blockchain/containers/BlockchainContainer'

const auth = new AuthService('wdg51OXdRDPG6kEWe1Hp1xgdGZDWIn6e', 'fundrequest.eu.auth0.com')

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' })
    }
}

export default (
    <Route path="/" component={App} auth={auth}>
        <IndexRedirect to="home"/>
        <Route path="login" component={LoginPageContainer} />
        <Route path="home" component={HomePageContainer} onEnter={requireAuth}/>
        <Route path="about" component={AboutPage} onEnter={requireAuth}/>
        <Route path="blockchain" component={BlockchainContainer}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
)
