import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const SectionSubHeader = ({
                           title = ''
                       }) => {
    return (
        <div className="section-subheader">
            <FormattedMessage
                id={title}
                tagName={'h3'}
            />
            <div className="underline"/>
        </div>
    )
}

SectionSubHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default SectionSubHeader