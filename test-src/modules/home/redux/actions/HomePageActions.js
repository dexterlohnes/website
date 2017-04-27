import axios from 'axios'
import {AUTHENTICATE_REQUEST, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE} from "./types/LoginTypes";
import qs from 'qs';

function authenticateRequest() {
    return {
        type: AUTHENTICATE_REQUEST
    }
}

function authenticateSuccess(payload) {
    return {
        type: AUTHENTICATE_SUCCESS,
        payload
    }
}

function authenticateFailure(error) {
    let payload
    if (error.response) payload = error.response.data

    return {
        type: AUTHENTICATE_FAILURE,
        payload,
        error
    }

}

export const authenticate = (options) => {
    let variables = {...options}

    return dispatch => {
        dispatch(authenticateRequest())

        return axios.post('http://localhost:9999/oauth/token',qs.stringify({
            ...variables,
            client_id : 'panel-management',
            client_secret: 'QzYo#HMDZ/m8vnfKWPt7WsbxYRYdLn',
            grant_type: 'password'
        }), {
            crossDomain: true,
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Accept' : 'application/json'
            }
        })
            .then(result => dispatch(authenticateSuccess(result.data)))
            .catch(error => dispatch(authenticateFailure(error)))
    }
}
