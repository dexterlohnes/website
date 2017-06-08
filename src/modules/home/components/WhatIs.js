import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'


const WhatIs = ({}) => {
    return (
        <div className="whatis section">
            <div className="content">
                <div className="gr-container">
                    <div className="row">
                        <div className="gr-12 center">
                            <SectionHeader
                                title={'app.home.whatis.title'}
                            />
                            <br/>
                            <br/>
                            <br/>
                           <div className="description">
                                FundRequest is an integrated platform to fund an open source project and financially incentivise 
                                a community to develop a solution to a problem, to fix bugs or to program additional features 
                                for an existing application.
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

WhatIs.propTypes = {}

export default WhatIs