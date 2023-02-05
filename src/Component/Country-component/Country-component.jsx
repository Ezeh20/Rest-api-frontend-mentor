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
    const { capital, name, region, population, flags, subregion, tld, currencies, languages, borders } = location.state
    const { common, nativeName } = name
    const { svg } = flags

    console.log(borders ? borders : 'no data')

    //use the object key to the native language then get the nativeName of that country
    const objectKeys = Object.keys(nativeName)
    const lang = objectKeys[objectKeys.length - 1]
    const Native_name = nativeName[lang].common

    //use object keys to get the currency of that country
    const currenciesKeys = Object.keys(currencies)
    const ckey = currenciesKeys[0]
    const currency = currencies[ckey].name

    //languages
    const Language = Object.keys(languages)

    const Lang = Language.map((lang, idx) => {
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
    //map out the borders
    const Border = borders && borders.map((border, idx) => {
        return (
            <ButtonComponent key={idx}>{border}</ButtonComponent>
        )
    })

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
                                        <p>Population: <span>{formatted}</span></p>
                                        <p>Region: <span>{region}</span></p>
                                        <p>Sub Region: <span>{subregion}</span></p>
                                        <p>Capital: <span>{Capital}</span>
                                        </p>
                                    </div>
                                    <div className={`${styles.info_details}`}>
                                        <p>Top Level Domain: {tld}</p>
                                        <p className={styles.crown}>Currencies: <span>{Currency}</span></p>
                                        <p>Languages: {Lang}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.country_border}`}>
                                <p>Border Countries:</p>
                                <div className={`${styles.borders}`}>
                                    {Border ? Border : 'No data'}
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