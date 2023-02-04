import React, { useContext } from 'react'
import CountryCards from '../../Component/Country-Cards/Country-cards'
import SearchComponent from '../../Component/Search-and-Filter-Component/Search-component'
import { CountriesContext } from '../../Context/Countries-context'
import { ThemeContext } from '../../Context/ThemeContext'
import ContainerW from '../../Layout/Container/Container'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'

import img from "../../assets/img/mobile-rest-dark.png"

const fake = {
    flag: img,
    name: 'Iceland',
    population: 120000000000000,
    region: 'Iceplace',
    capital: 'congo'
}

const Home = () => {
    const { filtered } = useContext(CountriesContext)
    return (
        <div>
            <Layout>
                <ContainerW>
                    <div className={`${styles.home} bg text`}>
                        <SearchComponent />
                        <div>
                            {


                                <CountryCards country={fake} />

                            }
                        </div>
                    </div>
                </ContainerW>
            </Layout>
        </div>
    )
}


export default Home