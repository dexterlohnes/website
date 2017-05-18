import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'

const Goals = ({}) => {
    return (
        <div className="goals section">
            <div className="content">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-12 center">
                            <SectionHeader
                                title={'app.home.goals.title'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Goals.propTypes = {}

export default Goals