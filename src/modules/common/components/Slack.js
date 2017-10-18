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
                            <br/>
                            <img src={getPath('images/app/slack.png')} />
                            <img src={getPath('images/app/twitter.png')} />
                        </div>
                    </div>
                </div>
            </div>
        </Scroll.Element>
    )
}

Slack.propTypes = {}

export default Slack
