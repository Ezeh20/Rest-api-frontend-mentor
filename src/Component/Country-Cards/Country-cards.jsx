import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Country-cards-style.module.scss'

const CountryCards = ({ country }) => {
    const { capital, name, region, population, flags } = country
    const { common } = name
    const { png } = flags

    //formatting country population
    const formatted = new Intl.NumberFormat().format(population)
    const nav = useNavigate()

    //replace white spaces with a (-) in the common names
    const dynamic = common.replaceAll(' ', '-')

    //navigate to the dynamic route while passing the state of that singular item
    const Navigate = () => {
        nav(dynamic, {
            state: country
        })
    }

    return (
        <div className={`${styles.country_card} alt-bg`} onClick={Navigate}>
            <img src={png} alt="flag" className={styles.country_flag} />
            <div className={`${styles.card_content}`}>
                <span className={`${styles.country_name} 'alt-text'`}>{common}</span>
                <div className={styles.country_info}>
                    <p>Population: <span className={styles.country_details}>{formatted}</span></p>
                    <p>Region: <span className={styles.country_details}>{region}</span></p>
                    <p>Capital: <span className={styles.country_details}>{capital}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CountryCards