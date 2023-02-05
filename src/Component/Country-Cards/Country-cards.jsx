import React from 'react'
import styles from './Country-cards-style.module.scss'

const CountryCards = ({ country }) => {
    const { capital, name, region, population, flags } = country
    const { common } = name
    const { png } = flags



    //formatting country population
    const formatted = new Intl.NumberFormat().format(population)

    return (
        <div className={`${styles.country_card} alt-bg`}>
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