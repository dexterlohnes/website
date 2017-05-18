import React, {PropTypes} from 'react'
import SectionHeader from './SectionHeader'

const Steps = ({}) => {
    return (
        <div className="steps section">
            <div className="content">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-12 center">
                            <SectionHeader
                                title={'app.home.steps.title'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Steps.propTypes = {}

export default Steps