import React from 'react'
import styles from './Country-cards-style.module.scss'

const CountryCards = ({ country }) => {

    console.log(country)
const { capital, name, region, population, flags } = country
    const { common } = name
    const { png } = flags


    return (
        <div className={`${styles.country_card} alt-bg`}>
            <img src={png} alt="flag" className={styles.country_flag} />
            <div className={`${styles.card_content}`}>
                <span className='alt-text'>{common}</span>
                <div className={styles.country_info}>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </div>
            </div>
        </div>

    )
}

export default CountryCards