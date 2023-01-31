import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'

const Home = props => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <Layout>
                <div className={`${styles.homo} bg text`}>
                    <h1>abb</h1>
                </div>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>click</button>
            </Layout>
        </div>
    )
}


export default Home