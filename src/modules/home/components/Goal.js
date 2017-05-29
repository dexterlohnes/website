import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from '../../common/components/Icons'
import {FormattedMessage} from 'react-intl'

const Goal = ({
                  icon,
                  title,
                  text
              }) => {
    return (
        <div className="goal">
            <Icon className={'icon'} name={icon} size={'3x'}/>
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

Goal.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Goal