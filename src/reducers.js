import {reducer as formReducer} from 'redux-form'
import {reducer as uiReducer} from 'redux-ui'
import {routerReducer} from 'react-router-redux'
import global from 'modules/common/redux/reducers/GlobalReducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    ui: uiReducer,
    // global
})

export default rootReducer
