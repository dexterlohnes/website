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
                             <br/>
                             <br/>
                             <div>
                               <iframe width="560" height="315" src="https://www.youtube.com/embed/Jnd5W7h3igQ" frameborder="0" allowfullscreen></iframe>
                             </div>
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
                           <br/><br/>
                           <div>
                             <a href="https://docs.fundrequest.io/display/PUB" target="_blanc" className="learn-more-hyperlink">Learn more</a>
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