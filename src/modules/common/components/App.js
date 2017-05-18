import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {switchLanguage} from '../redux/actions/LocalesActions'
import {bindActionCreators} from 'redux'
import {getMuiTheme} from 'material-ui/styles/index'
import {MuiThemeProvider} from 'material-ui'
import Header from './Header'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const getTheme = ({ userAgent }) => {
    return getMuiTheme({
        userAgent : userAgent,
        palette: {
            primary1Color: '#03a9f4',
            primary2Color: '#ffab00'
        },
        radioButton: {
            // borderColor: '#98999e',
            // backgroundColor: palette.alternateTextColor,
            // checkedColor: palette.primary1Color,
            // requiredColor: palette.primary1Color,
            // disabledColor: palette.disabledColor,
            // size: 24,
            // labelColor: palette.textColor,
            // labelDisabledColor: palette.disabledColor,
        }
    });
}

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
    render() {
        let children = null
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth //sends auth instance from route to children
            })
        }

        let muiTheme = getTheme({ userAgent: this.props.userAgent})

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="main-container">
                    <Header auth={this.props.route.auth}/>
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
