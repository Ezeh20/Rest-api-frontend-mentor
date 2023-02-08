import React, { useContext } from 'react'
import Navigation from './Nav-Bar/Navigation'
import styles from './Layout.module.scss'
import { ThemeContext } from '../Context/ThemeContext'

const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`${styles.main}  bg`} >
            <Navigation />
            {children}
        </div>
    )
}

export default Layout