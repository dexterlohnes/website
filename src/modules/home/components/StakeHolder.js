import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const StakeHolder = ({
                         title,
                         text
                     }) => {
    return (
        <div className="stakeholder">
            <FormattedMessage
                id={title}
                tagName={'h3'}
            />
            <FormattedMessage
                id={text}
                tagName={'p'}
            />
        </div>
    )
}

StakeHolder.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default StakeHolder