import {config} from '../../../config/getConfig'
import {browserHistory, hashHistory} from 'react-router'

export const getHistory = () => {
    return config.useHashRouting ? hashHistory : browserHistory;
}

export const pushHistory = (path, delay) => {
    if (typeof delay === 'undefined') {
        getHistory().push(path)
    } else {
        setTimeout(getHistory().push.bind(null,path), delay)
    }
}