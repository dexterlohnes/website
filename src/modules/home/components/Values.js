import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'

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
                </div>
            </div>
        </div>
    )
}

Values.propTypes = {}

export default Values