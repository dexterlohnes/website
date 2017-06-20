import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../home/components/SectionHeader'
import {getPath} from '../../common/tools/URLTools'
import ScrollableAnchor from 'react-scrollable-anchor'

const Slack = ({}) => {
    return (
        <ScrollableAnchor id={'slack'}>
            <div className="slack section">
                <div className="content">
                    <div className="row">
                        <div className="gr-12 center">
                            <SectionHeader
                                title={'app.slack.title'}
                            />
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className="row-full">
                        <div className="lean">
                            <iframe src="http://slack.fundrequest.io"></iframe>
                        </div>
                    </div>     
                </div>
            </div>
        </ScrollableAnchor>
    )
}

Slack.propTypes = {}

export default Slack
