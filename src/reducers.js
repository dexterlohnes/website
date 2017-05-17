import {reducer as formReducer} from 'redux-form'
import {reducer as uiReducer} from 'redux-ui'
import {routerReducer} from 'react-router-redux'
import global from 'modules/common/redux/reducers/GlobalReducers'
import {combineReducers} from 'redux'
import {reducer as fetching} from 'redux-fetch-data'

const rootReducer = combineReducers({
    fetching,
    routing: routerReducer,
    form: formReducer,
    ui: uiReducer,
    global
})

export default rootReducer
