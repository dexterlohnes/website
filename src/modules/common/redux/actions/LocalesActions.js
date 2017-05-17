import {SWITCH_LANGUAGE, UPDATE_LANGUAGE} from './types/LocalesTypes'

function updateLanguageAction(payload) {
    return {
        type: UPDATE_LANGUAGE,
        payload
    }
}

function switchLanguageAction(payload) {
    return {
        type: SWITCH_LANGUAGE,
        payload
    }
}


export const updateLanguage = (lang) => {
    return dispatch => {
        dispatch(updateLanguageAction(lang))
    }
}

export const switchLanguage = (lang) => {
    return dispatch => {
        dispatch(switchLanguageAction({
            lang,
            messages: require('../../../../locales/' + lang + '.js').default.messages
        }))
    }
}