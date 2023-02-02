import React, { useContext } from 'react'
import CountryCards from '../../Component/Country-Cards/Country-cards'
import SearchComponent from '../../Component/Search-and-Filter-Component/Search-component'
import { CountriesContext } from '../../Context/Countries-context'
import { ThemeContext } from '../../Context/ThemeContext'
import ContainerW from '../../Layout/Container/Container'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'


const Home = () => {
    const { countries, setCountries } = useContext(CountriesContext)
    return (
        <div>
            <Layout>
                <ContainerW>
                    <div className={`${styles.home} bg text`}>
                        <SearchComponent />
                        <div>
                            {
                                countries.map((country, idx) => {
                                    return (
                                        <CountryCards key={idx} country={country} />
                                    )
                                })
                            }

                            
                        </div>
                    </div>
                </ContainerW>
            </Layout>
        </div>
    )
}


export default Home