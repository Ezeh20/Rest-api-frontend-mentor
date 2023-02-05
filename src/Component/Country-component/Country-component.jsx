import React from 'react'
import { useLocation } from 'react-router-dom'
import ContainerW from '../../Layout/Container/Container'
import Layout from '../../Layout/Layout'
import ButtonComponent from '../Button/Button-component'
import styles from './Country.module.scss'
import { HiArrowNarrowLeft } from "react-icons/hi";

const CountryComponent = () => {
    //access the state in the current route which was passed using the useNavigate hook
    const location = useLocation()
    const { capital, name, region, population, flags, languages } = location.state
    const { common, nativeName } = name
    const { svg } = flags

    //use the object key to the native language then get the nativeName of that country
    const objectKeys = Object.keys(nativeName)
    const lang = objectKeys[objectKeys.length - 1]
    const Native_name = nativeName[lang].common

    const formatted = new Intl.NumberFormat().format(population)
    return (
        <div>
            <Layout>
                <ContainerW>
                    <div className={`${styles.discription} text`}>
                        <ButtonComponent>
                            <HiArrowNarrowLeft />
                            Back
                        </ButtonComponent>
                        <div className={`${styles.country_details} text`}>
                            <img src={svg} alt="country-flag" className={styles.details_img} />
                            <div className={`${styles.details_content}`}>
                                <p>{common}</p>
                                <div className={`${styles.country_info}`}>
                                    <div className={`${styles.info_details}`}>
                                        <p>Native Name: <span>{Native_name}</span></p>
                                    </div>
                                    <div className={`${styles.info_details}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerW>
            </Layout>

        </div>
    )
}
export default CountryComponent