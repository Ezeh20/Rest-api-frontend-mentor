import React from 'react'
import styles from './Button.module.scss'

const ButtonComponent = ({ onClick, children }) => {
    return (
        <button className={`${styles.buttons} alt-bg text`} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonComponent