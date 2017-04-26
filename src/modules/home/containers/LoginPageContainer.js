import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import LoginPage from '../components/LoginPage'
import AuthService from '../../common/tools/AuthService'


export const mapStateToProps = (state) => {
    return {

    }
}

export const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators({
    // }, dispatch)
    return {}
}

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class LoginPageContainer extends Component {
    static propTypes = {
        location: PropTypes.object,
        auth: PropTypes.instanceOf(AuthService)
    }

    render() {
        const { auth } = this.props
        return (
            <LoginPage
                onLogin={auth.login.bind(this)}
            />
        )
    }
}
