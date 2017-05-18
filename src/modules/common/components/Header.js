import React, {PropTypes, Component} from 'react'
import {getPath} from '../tools/URLTools'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {switchLanguage} from '../redux/actions/LocalesActions'
import {IndexLink, Link} from 'react-router'
import {pushHistory} from '../tools/HistoryTools'

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
        // destroys the session data
        this.props.route.auth.logout()
        // redirects to login page
        pushHistory(getPath('login'))
    }

    render() {
        return (
            <div className="header">
                <img src={getPath('images/app/header-logo.png')} className="header-logo"/>

                <div className="navigation">
                    <IndexLink to={getPath(this.props.language + '/home')}>Home</IndexLink>
                    {' | '}
                    <Link to={getPath(this.props.language + '/about')}>About</Link>
                    {' | '}
                    <Link to={getPath(this.props.language + '/login')}>Login</Link>
                    {' | '}
                    <Link to={getPath(this.props.language + '/blockchain')}>Blockchain</Link>
                    {' | '}
                    <Link onClick={this.logout.bind(this)}>Logout</Link>
                </div>
            </div>
        )
    }
}

Header.propTypes = {}


export default Header
