import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import ContainerW from '../../Layout/Container/Container'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'

const Home = props => {
    return (
        <div>
            <Layout>
                <ContainerW>
                    <div className={`${styles.homo} text`}>
                        
                    </div>
                </ContainerW>
            </Layout>
        </div>
    )
}


export default Home