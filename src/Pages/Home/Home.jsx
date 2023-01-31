import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'

const Home = props => {
    return (
        <div>
            <Layout>
                <div className={`${styles.homo}`}>
                    <h1 className={styles.tex}>abb</h1>
                </div>
            </Layout>
        </div>
    )
}


export default Home