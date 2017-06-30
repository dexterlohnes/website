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
import ui from 'redux-ui'
import Scroll from 'react-scroll'

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

@ui({
    key: 'header',
    state: {
        navigationOpen: false
    }
})
@connect(
    mapStateToProps,
    mapDispatchToProps
)
class Header extends Component {
    logout() {
        this.props.auth.logout()
        pushHistory(getPath(this.props.language + '/login'))
    }

    toggleMenu() {
        this.props.updateUI('navigationOpen', !this.props.ui.navigationOpen)
    }

    render() {
        let navigationOpenClass = this.props.ui.navigationOpen ? ' ' + 'responsive-open' : ''

        return (
            <div className="header">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-3 gr-12@tablet gr-12@mobile">
                            <Link to={getPath(this.props.language + '/home')}>
                                <img src={getPath('images/app/header-logo.png')} className="header-logo"/>
                            </Link>
                        </div>

                        <div className="gr-9 gr-12@tablet gr-12@mobile">
                            <div className={'navigation' + navigationOpenClass}>
                                <a className="nav-item" href="https://fundrequest.io/whitepaper" target="_blank">Whitepaper</a>
                                <a className="nav-item" href="https://docs.fundrequest.io/display/PUB/" target="_blank">Documentation</a>
                                <Scroll.Link to="roadmap" className="nav-item" smooth={true}
                                             offset={-75}>Roadmap</Scroll.Link>
                                
                                <a className="nav-item" href="https://blog.fundrequest.io" target="_blank">Blog</a>
                                <Scroll.Link to="about-us" className="nav-item" smooth={true} offset={-75}>About
                                    Us</Scroll.Link>
                                <div className="nav-item center@mobile center@tablet">
                                    <Scroll.Link to="slack" className="nav-item" smooth={true} offset={-75}
                                                 style={{marginRight: '0'}}>
                                        <Button text={'app.header.sign-up'}
                                                onClick={() => {
                                                }}
                                                className={'sign-up-button'}
                                        />
                                    </Scroll.Link>
                                    {/* 
                                    <Button text={'app.header.crowdsale'}
                                            onClick={() => {
                                            }}
                                            styleType={ButtonTypes.SECONDARY}
                                            className={'crowdsale-button nav-item'}
                                    />
                                    */}
                                </div>
                                <Icon
                                    className={'toggle-icon'}
                                    name={'bars'}
                                    onClick={this.toggleMenu.bind(this)}
                                    size={'lg'}
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
