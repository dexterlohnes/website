import React from 'react'
import {IndexRedirect, Route} from 'react-router'

import App from './modules/common/components/App'
import RoadmapPage from './modules/common/components/RoadmapPage'
import NotFoundPage from './modules/common/components/NotFoundPage'
import HomePageContainer from './modules/home/containers/HomePageContainer'
import AuthService from './modules/common/tools/AuthService'
import LoginPageContainer from './modules/home/containers/LoginPageContainer'
import BlockchainContainer from './modules/blockchain/containers/BlockchainContainer'
import {config} from '../src/config/getConfig'
import {defaultLanguage, supportedLanguages} from './modules/common/tools/Internationalization'

const auth = new AuthService('wdg51OXdRDPG6kEWe1Hp1xgdGZDWIn6e', 'fundrequest.eu.auth0.com')

// validate authentication for private routes
const requireAuth = (language) => {
    return (nextState, replace) => {
        if (!auth.loggedIn()) {
            replace({ pathname: '/' + language + '/login' })
        }
    }
}

const useDefaultLanguage = () => {
    return (nextState, replace) => {
        let pathname = nextState.location.pathname

        if (supportedLanguages.indexOf(pathname.split('/')[1]) === -1) {
            replace({ pathname: '/' + defaultLanguage + pathname })
        }
    }
}

const translatedRoutes = (language) => (
    <Route path={language + '/'} key={language}>
        <IndexRedirect to={'home'}/>
        <Route path="login" component={LoginPageContainer} />
        <Route path="home" component={HomePageContainer} />
        <Route path="roadmap" component={RoadmapPage}/>
        <Route path="blockchain" component={BlockchainContainer} onEnter={requireAuth(language)}/>
    </Route>
)

const routes = (
    <Route path={config.basePath} component={App} auth={auth}>
        <IndexRedirect to={defaultLanguage + '/home'}/>
        {supportedLanguages.map(language => translatedRoutes(language))}
        <Route path="*" component={NotFoundPage} onEnter={useDefaultLanguage()}/>
    </Route>
)

export default routes