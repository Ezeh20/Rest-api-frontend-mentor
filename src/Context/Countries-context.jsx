import { createContext, useEffect, useState } from "react";



export const CountriesContext = createContext({
    countries: [],
    setCountries: () => { }
})



export const CountriesProvider = ({ children }) => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const countries = async () => {
            const data = await fetch('https://restcountries.com/v3.1/all')
            const all = await data.json()
            setCountries(all)
        }
        return countries
    }, [])

    console.log(countries)


    const value = { countries, setCountries }
    return (
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    )
}