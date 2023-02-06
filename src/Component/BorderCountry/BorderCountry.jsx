import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ContainerW from '../../Layout/Container/Container'
import Layout from '../../Layout/Layout'
import ButtonComponent from '../Button/Button-component'
import styles from '../Country-component/Country.module.scss'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { CountriesContext } from '../../Context/Countries-context'

const BorderCountry = ({ border }) => {
    const nav = useNavigate()
    const {
        capital,
        name,
        region,
        population,
        flags,
        subregion,
        tld,
        currencies,
        languages
    } = border
    const { common, nativeName } = name
    const { svg } = flags

    //navigate to previous route
    const back = () => {
        nav(-1)
    }

    //use the object key to the native language then get the nativeName of that country
    const objectKeys = Object.keys(nativeName)
    const lang = objectKeys[objectKeys.length - 1]
    const Native_name = nativeName[lang].common

    //use object keys to get the currency of that country
    const currenciesKeys = Object.keys(currencies)

    //languages
    const Language = Object.keys(languages)

    const Lang = Language.filter((_, idx) => idx < 5).map((lang, idx) => {
        return (
            <span key={idx}>{languages[lang]}
                {idx === Language.length - 1 ? "" : " , "}
            </span>
        )
    })

    //map out the currencies
    const Currency = currenciesKeys && currenciesKeys.map((curr, idx) => {
        return (
            <span className={styles.country_capital} key={idx}>{
                currencies[curr].name}{idx === currenciesKeys.length - 1 ? "" : " , "}
            </span>
        )
    })

    //map out the Capitals
    const Capital = capital && capital.map((cap, idx) => {
        return (
            <span className={styles.country_capital} key={idx}>{cap}
                {idx === capital.length - 1 ? "" : ' , '}
            </span>
        )
    })

    //format population
    const formatted = new Intl.NumberFormat().format(population)


    return (
        <div>
            <Layout>
                <ContainerW>
                    <div className={`${styles.discription} text`}>
                        <ButtonComponent onClick={back}>
                            <HiArrowNarrowLeft />
                            Back
                        </ButtonComponent>
                        <div className={`${styles.country_detail} text`}>
                            <img src={svg} alt="country-flag" className={styles.details_img} />
                            <div className={`${styles.second}`}>
                                <div className={`${styles.details_content}`}>
                                    <p className={`${styles.common} alt-text`}>{common}</p>
                                    <div className={`${styles.country_info}`}>
                                        <div className={`${styles.info_details} alt-text`}>
                                            <p>Native Name: <span>{Native_name}</span></p>
                                            <p>Population: <span>{formatted}</span></p>
                                            <p>Region: <span>{region}</span></p>
                                            <p>Sub Region: <span>{subregion}</span></p>
                                            <p>Capital: <span>{Capital}</span>
                                            </p>
                                        </div>
                                        <div className={`${styles.info_details} alt-text`}>
                                            <p>Top Level Domain: <span>{tld}</span></p>
                                            <p className={styles.crown}>Currencies: <span>{Currency}</span></p>
                                            <p>Languages: {Lang}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerW>
            </Layout>
        </div>
    )
}

export default BorderCountry