import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const SectionHeader = ({
                           title = ''
                       }) => {
    return (
        <div className="section-header">
            <FormattedMessage
                id={title}
                tagName={'h2'}
            />
            <div className="underline"/>
        </div>
    )
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default SectionHeader