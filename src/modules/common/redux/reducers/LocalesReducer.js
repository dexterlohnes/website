import {SWITCH_LANGUAGE, UPDATE_LANGUAGE} from '../actions/types/LocalesTypes'

const initialState = {}

export const locales = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LANGUAGE:
            return {
                ...state,
                lang: action.payload
            }
        case SWITCH_LANGUAGE:
            return {
                ...state,
                lang: action.payload.lang,
                messages: action.payload.messages
            }
        default:
            return state
    }
}
