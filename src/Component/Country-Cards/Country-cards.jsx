import styles from './Country-cards-style.module.scss'

import React from 'react'

const CountryCards = ({ country }) => {

    const { capital, name, region, population, flags } = country
    const { common } = name
    const { png } = flags
    return (
        <div>
            <p>{common}</p>

        </div>
    )
}

export default CountryCards