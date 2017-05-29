import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const Member = ({
                    avatar,
                    name,
                    title,
                    text
                }) => {
    return (
        <div className="member">
            <img className="avatar" src={avatar} alt={'avatar for ' + name}/>
            <h3 className="name">{name}</h3>
            <FormattedMessage
                id={title}
                tagName={'h4'}
            />
            <FormattedMessage
                id={text}
                tagName={'p'}
            />
        </div>
    )
}

Member.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Member