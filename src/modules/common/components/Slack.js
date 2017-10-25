import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../home/components/SectionHeader'
import {getPath} from '../../common/tools/URLTools'
import Scroll from 'react-scroll'

const Slack = ({}) => {
    return (
        <Scroll.Element name="slack" className="slack section">
            <div className="slack section">
                <div className="content">
                    <div className="row">
                        <div className="gr-12 center">
                            <SectionHeader
                                title={'app.slack.title'}
                            />
                            <br/>
                            <a className="typeform-share slack-register button" href="https://goo.gl/4bESsj" data-mode="popup" target="_blank"><img src={getPath('images/slack.png')} /></a>&nbsp;&nbsp;&nbsp;
                            <a href="https://twitter.com/intent/follow?screen_name=fundrequest_io" target="_blanc"><img src={getPath('images/twitter.png')} /></a>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </Scroll.Element>
    )
}

Slack.propTypes = {}

export default Slack
