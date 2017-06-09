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
import {FormattedMessage} from 'react-intl'


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
                        <div className="gr-6 gr-12@mobile">
                            <Link to={getPath(this.props.language + '/home')}>
                                <img src={getPath('images/app/header-logo.png')} className="footer-logo"/>
                            </Link>
                            <div className="copyright">
                            <FormattedMessage
                                    id={'app.footer.copyright'}
                                    tagName={'p'}
                            />
                            </div>
                            <div className="social-container">
                                <a href="https://twitter.com/fundrequest_io" target="_blank"><Icon name="twitter" size="lg"/></a>
                                <a href="https://blog.fundrequest.io" target="_blank"><Icon name="medium" size="lg"/></a>
                                <a href="https://github.com/fundrequest/" target="_blank"><Icon name="github" size="lg"/></a>
                                <a href="fundrequest.slack.com" target="_blank"><Icon name="slack" size="lg"/></a>
                                <a href="https://fundrequest.io" target="_blank"><Icon name="globe" size="lg"/></a>
                            </div>
                        </div>
                        <div className="gr-2 hide@mobile">
                            <div className="footer-section">
                                <div className="title">
                                <FormattedMessage
                                    id={'app.footer.resources.title'}
                                    tagName={'p'}
                                />
                                </div>
                                <div className="content">
                                <a href="https://fundrequest.io/whitepaper.pdf" target="_blank">
                                    <FormattedMessage
                                        id={'app.footer.resources.link.whitepaper'}
                                        tagName={'p'}
                                    />
                                </a>
                                <a href="https://docs.fundrequest.io/display/PUB" target="_blank">
                                    <FormattedMessage
                                        id={'app.footer.resources.link.documentation'}
                                        tagName={'p'}
                                    />
                                </a>
                                </div>
                            </div>
                        </div>
                         <div className="gr-2 hide@mobile">
                            <div className="footer-section">
                                <div className="title">
                                <FormattedMessage
                                    id={'app.footer.company.title'}
                                    tagName={'p'}
                                />
                                </div>
                                <div className="content">
                                <a href="">
                                    <FormattedMessage
                                        id={'app.footer.company.link.team'}
                                        tagName={'p'}
                                    />
                                </a>
                                <a href="">
                                    <FormattedMessage
                                        id={'app.footer.company.link.advisors'}
                                        tagName={'p'}
                                    />
                                </a><br/>
                                </div>
                            </div>
                        </div>
                         <div className="gr-2 hide@mobile">
                            <div className="footer-section">
                                <div className="title">
                                <FormattedMessage
                                        id={'app.footer.legal.title'}
                                        tagName={'p'}
                                />
                                </div>
                                <div className="content">
                                <a href="" target="_blank">
                                    <FormattedMessage
                                        id={'app.footer.legal.link.disclaimer'}
                                        tagName={'p'}
                                    />
                                </a><br/>
                                </div>
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
