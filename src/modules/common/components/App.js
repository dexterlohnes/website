import React from 'react'
import PropTypes from 'prop-types'
import {IndexLink, Link} from 'react-router'
import {getPath, pushHistory} from '../tools/URLTools'
import {connect} from 'react-redux'
import {switchLanguage} from '../redux/actions/LocalesActions'
import {bindActionCreators} from 'redux'
import {getMuiTheme} from 'material-ui/styles/index'
import {MuiThemeProvider} from 'material-ui'

let muiTheme = getMuiTheme({
    // userAgent : 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36',
    // palette: {
    //     primary1Color: 'red',
    //     primary2Color: 'blue'
    // },
    // radioButton: {
    //     borderColor: 'lightred',
        // backgroundColor: palette.alternateTextColor,
        // checkedColor: palette.primary1Color,
        // requiredColor: palette.primary1Color,
        // disabledColor: palette.disabledColor,
        // size: 24,
        // labelColor: palette.textColor,
        // labelDisabledColor: palette.disabledColor,
    // }
});

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
class App extends React.Component {
    logout() {
        // destroys the session data
        this.props.route.auth.logout()
        // redirects to login page
        pushHistory(getPath('login'))
    }

    render() {
        let children = null
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth //sends auth instance from route to children
            })
        }

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="main-container">
                    <IndexLink to={getPath(this.props.language + '/home')}>Home</IndexLink>
                    {' | '}
                    <Link to={getPath(this.props.language + '/about')}>About</Link>
                    {' | '}
                    <Link to={getPath(this.props.language + '/login')}>Login</Link>
                    {' | '}
                    <Link to={getPath(this.props.language + '/blockchain')}>Blockchain</Link>
                    {' | '}
                    <Link onClick={this.logout.bind(this)}>Logout</Link>
                    <br/>
                    {children}
                </div>
            </MuiThemeProvider>
        )
    }
}

App.propTypes = {
    children: PropTypes.element
}

export default App
