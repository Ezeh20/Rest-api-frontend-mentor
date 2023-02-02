import styles from './Country-cards-style.module.scss'

import React from 'react'

const CountryCards = ({ country }) => {

    const { capital, name, region, population, flags } = country
    const { common, official } = name
    const { png } = flags
    return (
        <div>


        </div>
    )
}

export default CountryCards