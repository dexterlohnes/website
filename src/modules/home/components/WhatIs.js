import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import {FormattedMessage} from 'react-intl'

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
                            <FormattedMessage
                                id={'app.home.whatis.description1'}
                                tagName={'p'}
                            />
                            <br/>
                            <FormattedMessage
                                id={'app.home.whatis.description2'}
                                tagName={'p'}
                            />
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