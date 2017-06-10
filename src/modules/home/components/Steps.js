import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import WizardStep from './WizardStep'


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
                            <br/>
                            <br/>
                            <br/>
                            <WizardStep
                                title="app.home.steps.download"
                                subtitle="app.home.steps.plugin"
                            />
                            <WizardStep
                                title="app.home.steps.create"
                                subtitle="app.home.steps.issue"
                            />
                            <WizardStep
                                title="app.home.steps.fund"
                                subtitle="app.home.steps.issue"
                            />
                            <WizardStep
                                title="app.home.steps.approve"
                                subtitle="app.home.steps.solution"
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
