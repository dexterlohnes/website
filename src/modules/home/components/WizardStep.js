import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from '../../common/components/Icons'
import {FormattedMessage} from 'react-intl'

const WizardStep = ({
                        title,
                        subtitle
                    }) => {
    return (
        <div className="wizard-step">
            <div>
                <span className="dashed-line"/>
                <Icon className={'circle'} name={'circle-o'} size={'lg'}/>
                <span className="dashed-line"/>
            </div>
            <br/>

            <div className="highlighted">
                <FormattedMessage
                    id={title}
                    tagName={'div'}
                />
            </div>
            <div>
                <FormattedMessage
                    id={subtitle}
                    tagName={'div'}
                />
            </div>
        </div>
    )
}

WizardStep.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default WizardStep