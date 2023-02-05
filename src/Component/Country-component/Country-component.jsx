import React from 'react'
import { useLocation } from 'react-router-dom'
import ContainerW from '../../Layout/Container/Container'
import Layout from '../../Layout/Layout'

const CountryComponent = () => {
    //access the state in the current route which was passed using the useNavigate hook
    const location = useLocation()
    const { capital, name, region, population, flags } = location.state

    return (
        <div>
            <Layout>
                <ContainerW>
                    <h1>{population}</h1>
                </ContainerW>
            </Layout>

        </div>
    )
}

export default CountryComponent