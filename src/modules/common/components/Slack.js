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
                            <a className="typeform-share button" href="https://goo.gl/4bESsj" data-mode="popup" style="display:inline-block;text-decoration:none;background-color:#267DDD;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" target="_blank"><img src={getPath('images/slack.png')} /></a>&nbsp;&nbsp;&nbsp;
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
