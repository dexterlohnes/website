import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from '../../common/components/Icons'
import {FormattedMessage} from 'react-intl'

const MileStone = ({
                        icon,
                        title,
                        subtitle
                    }) => {
    return (
        <div className="milestone-step">
            <div>
                <img src={icon} alt={'icon for ' + title}/>
            </div>
            <div>
                <span className="dashed-line"/>
                <Icon className={'circle'} name={'circle-o'} size={'lg'}/>
                <span className="dashed-line"/>
            </div>
            <br/>
            <br/>
            <div className="title">
                <FormattedMessage
                    id={title}
                    tagName={'div'}
                />
            </div>
            <div className="subtitle">
                <FormattedMessage
                    id={subtitle}
                    tagName={'div'}
                />
            </div>
        </div>
    )
}

MileStone.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default MileStone
