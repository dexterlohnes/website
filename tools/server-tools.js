import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {fetchDataOnServer} from 'redux-fetch-data'
import { AppContainer } from 'react-hot-loader'
import reducers from '../src/reducers'
import createHistory from 'react-router/lib/createMemoryHistory'


let webpackDevServer = {}
webpackDevServer.hostname = process.env.WP_HOST || 'localhost'
webpackDevServer.port = process.env.WP_PORT || 8079
webpackDevServer.path = 'http://' + webpackDevServer.hostname + ':' + webpackDevServer.port

export const assetMiddleware = () => {
    return (req, res, next) => {
        let mainjs = 'main.js',
            maincss = 'main.css'

        switch (process.env.NODE_ENV) {
            case 'development':
                res.locals.pretty = true
                res.locals.app_stylesheets = '\n      <script src=\'' + webpackDevServer.path + '/assets/js/devServerClient.js\'></script>\n      <script src=\'' + webpackDevServer.path + '/assets/js/' + mainjs + '\'></script>'
                res.locals.app_scripts = '\n      <script src=\'' + webpackDevServer.path + '/assets/js/plugins.js\'></script>\n      <script src=\'' + webpackDevServer.path + '/assets/js/app.js\'></script>'
                break
            case 'production' :
                res.locals.app_stylesheets = '\n      <link rel=\'stylesheet\' href=\'/css/' + maincss + '\' />'
                res.locals.app_scripts = '\n      <script src=\'/js/plugins.js\'></script>\n      <script src=\'/js/app.js\'></script>'
                break
        }

        next()
    }
}


export const renderHTMLString = (routes, req, callback) => {
    const history = createHistory(req.originalUrl)
    const store = createStore(reducers)

    match({routes, location: req.url}, (error, redirect, renderProps) => {
        if (!renderProps) return callback('props not defined!')

        fetchDataOnServer(renderProps, store).then(() => {
            if (error) {
                callback(error);
            } else if (redirect) {
                callback(null, redirect);
            } else if (renderProps) {
                let content

                try {
                    content = renderToString(
                        <AppContainer>
                            <Provider store={store}>
                                <RouterContext {...renderProps} />
                            </Provider>
                        </AppContainer>
                    )
                    callback(null, null, {
                        content: content,
                        data: store.getState()
                    });
                } catch(err) {
                    callback({
                        message: 'something went wrong during render: ' + err
                    })
                }
            } else {
                callback({
                    message: 'Not found'
                });
            }
        })
    })
}
