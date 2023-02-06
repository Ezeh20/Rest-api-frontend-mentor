import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CountriesContext } from '../../Context/Countries-context'
import BorderCountry from '../BorderCountry/BorderCountry'

const BordersComponent = () => {
    const { currentBorder, setCurrentBorder, countries } = useContext(CountriesContext)
    const loc = useLocation()
    const data = loc.state

    useEffect(() => {
        const filter = countries.filter((country) => country.cca3.toLowerCase().includes(data.toLowerCase()))
        setCurrentBorder(filter)
    }, [countries, data])

    return (
        <>
            {
                !currentBorder ? 'Loading' : currentBorder.map((border, idx) => {
                    return (
                        <BorderCountry key={idx} border={border} />
                    )
                })
            }
        </>
    )
}

export default BordersComponent