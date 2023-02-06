import React from 'react'
import './Button.scss'

const ButtonTypes = {
    back: 'back',
    border: 'border'
}
const ButtonComponent = ({ onClick, children, buttonType }) => {
    return (
        <button className={`buttons  ${ButtonTypes[buttonType]} alt-bg text`} onClick={onClick}>
            {children}
        </button>
    )
}
export default ButtonComponent