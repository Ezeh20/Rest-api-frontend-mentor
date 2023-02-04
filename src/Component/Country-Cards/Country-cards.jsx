import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import styles from './Country-cards-style.module.scss'

const CountryCards = ({ country }) => {

    {/**
const { capital, name, region, population, flags } = country
    const { common } = name
    const { png } = flags
*/}
    const { theme } = useContext(ThemeContext)

    const { flag, name, population, region, capital } = country
    return (
        <div className={styles[theme]}>
            <div className={`${styles.country_card}`}>
                <img src={flag} alt="flag" />
                <div className={`${styles.card_content}`}>
                    <span className='alt-text'>{name}</span>
                    <div className={styles.country_info}>
                        <p>Population:{population}</p>
                        <p>Region:{region}</p>
                        <p>Capital:{capital}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryCards