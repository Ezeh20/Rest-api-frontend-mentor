import { createContext, useEffect, useState } from "react";


export const CountriesContext = createContext({
    countries: [],
    setCountries: () => { },
    searchValue: '',
    setSearchValue: () => { },
    filterValue: '',
    setFilterValue: () => { }
})

export const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState('')

    //function to call the api then set the data to the countries state
    const countriesCall = async () => {
        const data = await fetch('https://restcountries.com/v3.1/all')
        const all = await data.json()
        setCountries(all)
    }
    //Load the data once on mount
    useEffect(() => {
        countriesCall()
    }, [])


    const value = { countries, setCountries, searchValue, setSearchValue, filterValue, setFilterValue }
    return (
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    )
}