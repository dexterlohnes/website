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
import {Icon} from './Icons'


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
class Footer extends Component {
    logout() {
        this.props.auth.logout()
        pushHistory(getPath(this.props.language + '/login'))
    }

    render() {
        return (
            <div className="footer">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-6">
                            <Link to={getPath(this.props.language + '/home')}>
                                <img src={getPath('images/app/header-logo.png')} className="footer-logo"/>
                            </Link>
                            <div className="copyright">
                            © 2017 FundRequest. All rights reserved.
                            </div>
                            <div className="social-container">
                                <a href="" target="_blank"><Icon name="twitter" size="lg"/></a>
                                <a href="" target="_blank"><Icon name="medium" size="lg"/></a>
                                <a href="" target="_blank"><Icon name="github" size="lg"/></a>
                                <a href="" target="_blank"><Icon name="slack" size="lg"/></a>
                                <a href="" target="_blank"><Icon name="globe" size="lg"/></a>
                            </div>
                        </div>
                        <div className="gr-6">
                            <div className="slogan">
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

Footer.propTypes = {}


export default Footer
