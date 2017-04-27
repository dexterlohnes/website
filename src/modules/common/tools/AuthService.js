import React from 'react'
import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'
import config from '../../../config/getConfig'

let browserStorage = (typeof localStorage === 'undefined') ? null : localStorage

const redirectUrl = config.useHashRouting ? config.frontEndHost + '/#/login' : config.frontEndHost + '/login'

export default class AuthService {
    constructor(clientId, domain) {
        try {
            // Configure Auth0
            this.lock = new Auth0Lock(clientId, domain, {
                auth: {
                    redirectUrl: redirectUrl,
                    responseType: 'token'
                }
            })
            // Add callback for lock `authenticated` event
            this.lock.on('authenticated', this._doAuthentication.bind(this))
            // binds login functions to keep this context
            this.login = this.login.bind(this)
        } catch (error) {
            console.log('Failed to create new Auth0Lock')
        }
    }

    _doAuthentication(authResult) {
        // Saves the user token
        this.setToken(authResult.idToken)
        // navigate to the home route
        browserHistory.replace('/home')
    }

    login() {
        // Call the show method to display the widget.
        this.lock.show()
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        if (!!browserStorage) return !!this.getToken()
        else return true
    }

    setToken(idToken) {
        // Saves user token to local storage
        if (!!browserStorage) browserStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from local storage
        if (!!browserStorage) return browserStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from local storage
        if (!!browserStorage) browserStorage.removeItem('id_token');
    }
}
