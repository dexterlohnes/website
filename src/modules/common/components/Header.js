import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getPath} from '../tools/URLTools'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {switchLanguage} from '../redux/actions/LocalesActions'
import {IndexLink, Link} from 'react-router'
import {pushHistory} from '../tools/HistoryTools'
import {ButtonTypes} from './Button'
import Button from './Button'

const mapStateToProps = (state) => {
    return {
        language: state.global.locales.lang
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        switchLanguage
    }, dispatch)
}

@connect(
    mapStateToProps,
    mapDispatchToProps
)
class Header extends Component {
    logout() {
        this.props.auth.logout()
        pushHistory(getPath(this.props.language + '/login'))
    }

    render() {
        return (
            <div className="header">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-3">
                            <img src={getPath('images/app/header-logo.png')} className="header-logo"/>
                        </div>

                        <div className="gr-9">
                            <div className="navigation">
                                <IndexLink to={getPath(this.props.language + '/home')}>Platform</IndexLink>
                                <Link to={getPath(this.props.language + '/roadmap')}>Roadmap</Link>
                                <a href="https://blog.fundrequest.io">Blog</a>
                                <Link to="">About Us</Link>
                                <Button text={'app.header.sign-up'}
                                        onClick={() => {}}
                                        className={'sign-up-button'}
                                />
                                <Button text={'app.header.crowdsale'}
                                        onClick={() => {}}
                                        styleType={ButtonTypes.SECONDARY}
                                        className={'crowdsale-button'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {}


export default Header
