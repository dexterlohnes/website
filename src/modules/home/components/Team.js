import React, {PropTypes} from 'react'
import SectionHeader from './SectionHeader'

const Team = ({}) => {
    return (
        <div className="team section">
            <div className="content">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-12 center">
                            <SectionHeader
                                title={'app.home.team.title'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Team.propTypes = {}

export default Team