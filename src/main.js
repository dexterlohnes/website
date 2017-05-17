require('es6-promise').polyfill()

import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './root'
import {config} from '../src/config/getConfig'

import configureStore from './store'
import {syncHistoryWithStore} from 'react-router-redux'
import setupReact from './setup'
import {Provider} from 'react-redux'
import ConnectedIntlProvider from './modules/common/containers/ConnectedIntlProvider'
import {defaultLanguage} from './modules/common/tools/Internationalization'
import {getHistory} from './modules/common/tools/HistoryTools'

setupReact()

const history = getHistory()
const initialPath = history.getCurrentLocation().pathname
const languageFromHistory = initialPath.replace(config.basePath, '').split('/')[0] || defaultLanguage

const store = configureStore({
    global: {
        locales: {
            lang: languageFromHistory,
            messages: require('./locales/' + languageFromHistory + '.js').default.messages
        }
    }
})

// Create an enhanced history that syncs navigation events with the store
const syncedHistory = syncHistoryWithStore(history, store)



const app = (RootComponent) => (
    <AppContainer>
        <Provider store={store}>
            <ConnectedIntlProvider>
                <RootComponent history={syncedHistory} store={store}/>
            </ConnectedIntlProvider>
        </Provider>
    </AppContainer>
)
const renderComponent = (RootComponent) => {
    render(app(RootComponent),document.getElementById('app'))
}

renderComponent(Root)


if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default
        renderComponent(NewRoot)
    })
}
