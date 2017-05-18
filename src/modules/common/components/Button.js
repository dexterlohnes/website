import React from 'react'
import PropTypes from 'prop-types'
import noop from '../tools/noop'
import {FlatButton} from 'material-ui'
import {injectIntl} from 'react-intl'

export const ButtonTypes = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    HOT: 'hot'
}

const buttonStyleCommon = {
    border: '1px solid',
    height: '28px',
    lineHeight: '24px',
    borderRadius: '3px',
    textTransform: 'none',
    margin: '0 10px'
}

const buttonStylePrimary = {
    ...buttonStyleCommon,
    backgroundColor: 'transparent',
    borderColor: '#ffab00',
    color: '#ffab00',
    iconColor: '#ffab00'
}

const buttonStyleSecondary = {
    ...buttonStyleCommon,
    backgroundColor: 'transparent',
    borderColor: '#03a9f4',
    color: '#03a9f4'
}

const buttonStyleHot = {
    ...buttonStyleCommon,
    height: '38px',
    lineHeight: '34px',
    backgroundColor: '#ffab00',
    borderColor: '#ffab00',
    color: '#fff'
}

const Button = ({
                    className = '',
                    text = '',
                    styleType = ButtonTypes.PRIMARY,
                    type = 'button',
                    onClick = noop,
                    translated = true,
                    intl
                }) => {

    let buttonClass = className + ' button ' + styleType
    let buttonStyle
    let rippleColor

    switch (styleType) {
        case ButtonTypes.PRIMARY:
            buttonStyle = buttonStylePrimary
            rippleColor = '#ffab00'
            break
        case ButtonTypes.SECONDARY:
            buttonStyle = buttonStyleSecondary
            rippleColor = '#03a9f4'
            break
        case ButtonTypes.HOT:
            buttonStyle = buttonStyleHot
            rippleColor = '#ffffff'
    }

    let label

    if (translated)
        label = intl.formatMessage({id: text})
    else
        label = text

    return (
        <FlatButton
            type={type}
            className={buttonClass}
            label={label}
            onClick={onClick}
            style={buttonStyle}
            rippleColor={rippleColor}
            labelStyle={{textTransform: 'inherit'}}
        />)
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    styleType: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    translated: PropTypes.bool
}

export default injectIntl(Button)
