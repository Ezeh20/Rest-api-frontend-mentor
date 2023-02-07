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
    setFiltered: () => { },
    search: '',
    setSearch: () => { },

})

export const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [searched, setSearched] = useState(false)
    const [filtered, setFiltered] = useState(countries)
    const [search, setSearch] = useState('')

    //Load the data once on mount
    useEffect(() => {
        const countriesCall = async () => {
            const data = await fetch('https://restcountries.com/v3.1/all')
            const all = await data.json()
            setCountries(all)
        }
        countriesCall()
    }, [])




    //filter then produce a search result based on country's name
    useEffect(() => {
        const newItems = countries.filter((filtered) => {
            return filtered.name['common'].toLowerCase().includes(search.toLowerCase())
        })
        setFiltered(newItems)
    }, [countries, search])


    //filter then produce a search result based on user's search
    useEffect(() => {
        const filterRegion = countries.filter((filtered) => {
            return filtered.region.toLowerCase().includes(filterValue.toLowerCase())
        })
        setFiltered(filterRegion)
    }, [countries, filterValue])

    const value = {
        countries,
        setCountries,
        searchValue,
        setSearchValue,
        filterValue,
        setFilterValue,
        isActive,
        setIsActive,
        searched,
        setSearched,
        filtered,
        setFiltered,
        search,
        setSearch
    }
    return (
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    )
}