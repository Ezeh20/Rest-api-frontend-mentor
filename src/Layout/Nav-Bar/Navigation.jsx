import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import styles from './Navigation.module.scss'
import ContainerW from '../Container/Container'
import { IoMoonSharp } from 'react-icons/io5';
import { RiSunFill } from 'react-icons/Ri';

const Navigation = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <header className={`${styles.nav} ${styles[theme]}`}>
            <ContainerW>
                <nav className={styles.nav_nav}>
                    <p className='text'>Where in the world ?</p>
                    <div onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
                        {
                            theme === 'light' ? (<div className={`${styles.themeContainer} text`}>
                                <RiSunFill className={styles.icon} />
                                <p>Light Mode</p>
                            </div>) : (<div className={`${styles.themeContainer} text`}>
                                <IoMoonSharp className={styles.icon} />
                                <p>Dark Mode</p>
                            </div>)
                        }
                    </div>
                </nav>
            </ContainerW>
        </header>
    )
}

export default Navigation