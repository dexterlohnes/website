import React from 'react'
import {addLocaleData, FormattedMessage} from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import nl from 'react-intl/locale-data/nl'
import {config} from '../../../config/getConfig'
import {getHistory} from './HistoryTools'

export const supportedLanguages = ['en', 'fr-fr', 'nl-be']
export const defaultLanguage = supportedLanguages[0]
const localeData = [...en, ...fr, ...nl]

export const polyfillIntl = () => {
    const applyPolyfill = () => {
        require('intl')
        Intl.NumberFormat = IntlPolyfill.NumberFormat
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat

        require('intl/locale-data/jsonp/en')
        require('intl/locale-data/jsonp/fr-FR')
        require('intl/locale-data/jsonp/nl-BE')

        console.log('[Internationalization] : window.Intl is being polyfilled for locales ' + supportedLanguages.toString())
    }

    if (!areIntlLocalesSupported(supportedLanguages)) {
        applyPolyfill()
    }
}

export const areIntlLocalesSupported = (locales) => {
    if (!locales) {
        throw new Error('[Internationalization] : locales must be supplied.')
    }

    if (typeof Intl === 'undefined') {
        console.log('[Internationalization] : window.Intl does not exist')
        return false
    }

    if (!Array.isArray(locales)) {
        locales = [locales]
    }

    let intlConstructors = [
        Intl.DateTimeFormat,
        Intl.NumberFormat
    ].filter(function (intlConstructor) {
        return intlConstructor
    })

    if (intlConstructors.length === 0) {
        console.log('[Internationalization] : window.Intl does not contain ' + intlConstructors.toString())
        return false
    }

    return intlConstructors.every(function (intlConstructor) {
        let supportedLocales = intlConstructor.supportedLocalesOf(locales)
        let localeSupportedForIntlFeature = supportedLocales.length === locales.length

        if (!localeSupportedForIntlFeature)
            console.log('[Internationalization] : locales [' + locales.toString() + '] not supported for ' +
                intlConstructor.name + ' [' + supportedLocales.toString() + ']')

        return localeSupportedForIntlFeature
    })
}

export const prepareLocaleData = () => {
    addLocaleData(localeData)
}

export const getLanguageFromURL = () => {
    const currentRoute = getHistory().getCurrentLocation().pathname.replace(config.basePath,'')

    return currentRoute.split('/')[0]
}

export const formatMessage = () => {
    let formattedMessage = (
        <FormattedMessage

        />
    )

    console.log(formattedMessage)
}
