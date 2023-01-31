import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import Layout from '../../Layout/Layout'



const Home = props => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className={theme}>
            <Layout>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>click</button>

            </Layout>
        </div>
    )
}


export default Home