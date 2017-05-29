import React, {PropTypes} from 'react'
import noop from '../tools/noop'

export const Icon = ({
                         className = '',
                         name = 'question',
                         size = '1x',
                         fixedWidth = false,
                         stackSize,
                         inverse = false,
                         onClick = noop
                     }) => {
    let sizeClass = ' fa-' + size
    let stackClass = stackSize ? ' fa-stack-' + stackSize + 'x' : ''
    let iconClass = ' fa-' + name
    let fixedWidthClass = fixedWidth ? ' fa-fw' : ''
    let inverseClass = inverse ? ' fa-inverse' : ''

    let iconClasses = 'fa ' + iconClass + sizeClass + fixedWidthClass + inverseClass + stackClass
    iconClasses += ' ' + className

    return (
        <i className={iconClasses} aria-hidden="true" onClick={onClick}/>
    )
}

Icon.propTypes = {
    size: PropTypes.oneOf(['lg', '1x', '2x', '3x', '4x', '5x']),
    className: PropTypes.string,
    name: PropTypes.string,
    fixedWidth: PropTypes.bool,
    stackSize: PropTypes.number,
    inverse: PropTypes.bool,
    onClick: PropTypes.func
}

export const Stack = ({ size, children}) => {
    let sizeClass = size ? ' fa-' + size : ''
    let stackClass = 'fa-stack' + sizeClass

    return (
        <span className={stackClass}>
            {children.map((icon, index) => {
                return <Icon {...icon.props} key={index} stackSize={2 / (index + 1)}/>
            })}
        </span>
    )
}

Stack.propTypes = {
    size: PropTypes.oneOf(['lg', '1x', '2x', '3x', '4x', '5x'])
}

export default {
    Icon, Stack
}
