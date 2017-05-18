import React, {Component} from 'react'
import PropTypes from 'prop-types'
import HomePage from '../components/HomePage'
import {connect} from 'react-redux'
import AuthService from '../../common/tools/AuthService'

export const mapStateToProps = (state) => {
    return {
        language: state.global.locales.lang
    }
}

@connect(
    mapStateToProps
)
export default class HomePageContainer extends Component {
    static propTypes = {
        auth: PropTypes.instanceOf(AuthService)
    }

    render() {
        const {auth} = this.props

        return (
            <HomePage
            />
        )
    }
}
