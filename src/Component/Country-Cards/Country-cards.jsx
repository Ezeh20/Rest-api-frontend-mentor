import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Country-cards-style.module.scss'



const CountryCards = ({ country }) => {
    const { capital, name, region, population, flags, cca3 } = country
    const { common } = name
    const { png } = flags

    //formatting country population
    const formatted = new Intl.NumberFormat().format(population)
    const nav = useNavigate()
    const loc = useLocation()

    //replace white spaces with a (-) in the common names
    const dynamic = common.replaceAll(' ', '-')

    //navigate to the dynamic route while passing the state of that singular item
    const Navigate = () => {
        nav(dynamic, {
            state: country
        })
    }
    //map out the capital
    const Capital = capital && capital.filter((_, idx) => idx < 2).map((cap, idx) => {
        return (
            <span key={idx} className={styles.country_details}>{cap}
                {idx === capital.length - 1 ? "" : " , "}
            </span>
        )
    })

    return (
        <div className={`${styles.country_card} alt-bg`} onClick={Navigate}>
            <img src={png} alt="flag" className={styles.country_flag} />
            <div className={`${styles.card_content}`}>
                <span className={`${styles.country_name} 'alt-text'`}>{common}</span>
                <div className={styles.country_info}>
                    <span>Population: <span className={styles.country_details}>{formatted}</span></span>
                    <span>Region: <span className={styles.country_details}>{region}</span></span>
                    <span className={styles.capital}>Capital:  {Capital}</span>
                </div>
            </div>
        </div>
    )
}

export default CountryCards