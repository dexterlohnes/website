import {combineReducers} from 'redux'
import {locales} from './LocalesReducer'

export const global = combineReducers({
    locales
})

export default global
