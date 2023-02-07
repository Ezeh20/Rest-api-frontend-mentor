import React, { useContext } from 'react'
import CountryCards from '../../Component/Country-Cards/Country-cards'
import SearchComponent from '../../Component/Search-and-Filter-Component/Search-component'
import { CountriesContext } from '../../Context/Countries-context'
import ContainerW from '../../Layout/Container/Container'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'


const Home = () => {
    const { mappedCountries } = useContext(CountriesContext)

    console.log(mappedCountries)

    return (
        <div>
            <Layout>
                <ContainerW>
                    <div className={`${styles.home} bg text`}>
                        <SearchComponent />
                        <p className={styles.total}>({mappedCountries.length})</p>
                        {mappedCountries.length < 1 && <p className={styles.not_found}> No country found</p>}
                        <div className={styles.contain}>
                            {
                                mappedCountries && mappedCountries.map((country, idx) => {
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