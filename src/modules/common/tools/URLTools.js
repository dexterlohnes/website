import {config} from '../../../config/getConfig'
import {default as commonConfig} from '../../../config/common.json'
import { browserHistory, hashHistory} from 'react-router'

export function getBackEndHost() {
    return config.backEndHost
}

export function getEndpoint(endpoint) {
    return commonConfig.endpoints[endpoint]
}

export function getURLParameterArray(url) {
    return url.match(/\{[a-zA-Z0-9]*}/g)
}

export function replaceURLParam(url, paramId, value) {
    return url.replace(paramId, value)
}

export function replaceURLNamedParameters(url, object) {
    let argumentObject = object
    let newURL = url

    for (let key in argumentObject) {
        if (argumentObject.hasOwnProperty(key)) {
            newURL = replaceURLParam(newURL, '{' + key + '}', argumentObject[key])
        }
    }

    return newURL
}

export function populateURLParameters(url, parameters) {
    let urlParams = getURLParameterArray(url) || []
    let params = parameters || []
    let newURL = url

    if (urlParams.length > 0 && params.length > 0) {
        for (let parameterIndex = 0; parameterIndex < params.length; parameterIndex++) {
            let argument = params[parameterIndex]

            switch (typeof argument) {
                case 'object':
                    newURL = replaceURLNamedParameters(newURL, argument)
                    break
                default:
                    newURL = replaceURLParam(newURL, urlParams[parameterIndex], argument)
                    break
            }
        }
    }

    return newURL
}

export function getURL() {
    let args = [...arguments]
    let endpoint = args.splice(0, 1)
    let url = getBackEndHost() + getEndpoint(endpoint)

    return populateURLParameters(url, args)
}

export function getStubURL() {
    let args = [...arguments]
    let endpoint = args.splice(0, 1)
    let url = getEndpoint(endpoint)

    return populateURLParameters(url, args)
}

export function getPath() {
    let args = [...arguments]
    let path = args.splice(0, 1)

    return config.basePath + path
}
