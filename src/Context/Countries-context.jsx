import { createContext, useEffect, useState } from "react";


export const CountriesContext = createContext({
    countries: [],
    setCountries: () => { },
    searchValue: '',
    setSearchValue: () => { },
    filterValue: '',
    setFilterValue: () => { },
    isActive: false,
    setIsActive: () => { },
    searched: false,
    setSearched: () => { },
    filtered: [],
    setFiltered: () => { }
})

export const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState('Filter by region')
    const [isActive, setIsActive] = useState(false)
    const [searched, setSearched] = useState(false)
    const [filtered, setFiltered] = useState(countries)



    //function to call the api then set the data to the countries state

    //Load the data once on mount
    useEffect(() => {
        const countriesCall = async () => {
            const data = await fetch('https://restcountries.com/v3.1/all')
            const all = await data.json()
            setCountries(all)
        }
        countriesCall()
    }, [])

    useEffect(() => {
        const ned = countries.filter((filtered) => {
            return filtered.name['common'].toLowerCase().includes(searchValue.toLowerCase())
        })
        setFiltered(ned)
    }, [countries, searchValue])

    console.log('filter', filtered)

    const value = { countries, setCountries, searchValue, setSearchValue, filterValue, setFilterValue, isActive, setIsActive, searched, setSearched, filtered, setFiltered }
    return (
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    )
}