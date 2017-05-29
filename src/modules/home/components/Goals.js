import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import Goal from './Goal'

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
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="gr-4 center">
                            <Goal
                                icon={'life-ring'}
                                title={'app.home.goals.support.title'}
                                text={'app.home.goals.support.text'}
                            />
                        </div>
                        <div className="gr-4 center">
                            <Goal
                                icon={'money'}
                                title={'app.home.goals.reward.title'}
                                text={'app.home.goals.reward.text'}
                            />
                        </div>
                        <div className="gr-4 center">
                            <Goal
                                icon={'fast-forward'}
                                title={'app.home.goals.accelerate.title'}
                                text={'app.home.goals.accelerate.text'}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="gr-4 center">
                            <Goal
                                icon={'users'}
                                title={'app.home.goals.measure.title'}
                                text={'app.home.goals.measure.text'}
                            />
                        </div>
                        <div className="gr-4 center">
                            <Goal
                                icon={'medkit'}
                                title={'app.home.goals.assistance.title'}
                                text={'app.home.goals.assistance.text'}
                            />
                        </div>
                        <div className="gr-4 center">
                            <Goal
                                icon={'shield'}
                                title={'app.home.goals.trust.title'}
                                text={'app.home.goals.trust.text'}
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