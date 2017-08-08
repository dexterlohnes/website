import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import MileStone from './MileStone'
import {FormattedMessage} from 'react-intl'
import {getPath} from '../../common/tools/URLTools'
import Scroll from 'react-scroll'

const Roadmap = ({}) => {
    return (
        <Scroll.Element name="roadmap" className="roadmap section">
            <div className="content">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-12 center">
                            <SectionHeader
                                title={'app.home.roadmap.title'}
                            />
                            <br/>
                            <br/>
                            <br/>
                            <MileStone
                                icon={getPath('images/app/home/milestone01.png')}
                                title="app.home.roadmap.phase1.title"
                                subtitle="app.home.roadmap.phase1.text"
                            />
                            <MileStone
                                icon={getPath('images/app/home/milestone02.png')}
                                title="app.home.roadmap.phase2.title"
                                subtitle="app.home.roadmap.phase2.text"
                            />
                            <MileStone
                                icon={getPath('images/app/home/milestone03.png')}
                                title="app.home.roadmap.phase3.title"
                                subtitle="app.home.roadmap.phase3.text"
                            />
                            <MileStone
                                icon={getPath('images/app/home/milestone04.png')}
                                title="app.home.roadmap.phase4.title"
                                subtitle="app.home.roadmap.phase4.text"
                            />
                            <br/>
                            <span className="already-joined">
                                <FormattedMessage
                                    id="app.home.roadmap.infographic.text"
                                    tagName={'span'}
                                />
                                <a href="https://docs.fundrequest.io/display/PUB/Roadmap" target="_blanc" className="learn-more-hyperlink">infographic</a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </Scroll.Element>
    )
}

Roadmap.propTypes = {}

export default Roadmap
