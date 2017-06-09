import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import StakeHolder from './StakeHolder'

const Values = ({}) => {
    return (
        <div className="values section">
            <div className="content">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-12 center">
                            <SectionHeader
                                title={'app.home.values.title'}
                            />
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="gr-6 center gr-12@mobile">
                        <StakeHolder
                            title={'app.home.values.users.title'}
                            text={'app.home.values.users.text'}
                        />
                    </div>
                    <div className="gr-6 center gr-12@mobile">
                        <StakeHolder
                            title={'app.home.values.developers.title'}
                            text={'app.home.values.developers.text'}
                        />
                    </div>
                
                
                    <div className="gr-6 center gr-12@mobile">
                        <StakeHolder
                            title={'app.home.values.business.title'}
                            text={'app.home.values.business.text'}
                        />
                    </div>
                    <div className="gr-6 center gr-12@mobile">
                        <StakeHolder
                            title={'app.home.values.projects.title'}
                            text={'app.home.values.projects.text'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

Values.propTypes = {}

export default Values