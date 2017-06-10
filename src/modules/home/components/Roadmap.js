import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import MileStone from './MileStone'
import {getPath} from '../../common/tools/URLTools'
import ScrollableAnchor from 'react-scrollable-anchor'

const Roadmap = ({}) => {
    return (
        <ScrollableAnchor id={'roadmap'}>
            <div className="roadmap section">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}

Roadmap.propTypes = {}

export default Roadmap
