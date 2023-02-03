import styles from './Search.module.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { CountriesContext } from '../../Context/Countries-context'
import { GoSearch } from "react-icons/go";
import { useForm } from 'react-hook-form';

/**
 * create an onChange function the takes the user's input the stores 
 * it in a state.
 * 
 */
const SearchComponent = () => {
    const { countries,
        setCountries, filterValue,
        setFilterValue, searchValue,
        setSearchValue, isActive,
        setIsActive, searched, setSearched
    } = useContext(CountriesContext)




    const active = () => {
        setIsActive(current => !current)
    }

    const FilterValue = (option) => {
        setFilterValue(option)
        setIsActive(false)
    }
    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']


    const search = (event) => {
        const value = event.target.value
        setSearchValue(value)

    }


    const clearSearch = async () => {
        const data = await fetch('https://restcountries.com/v3.1/all')
        const all = await data.json()
        setCountries(all)
        setSearchValue('')
    }

    useEffect(() => {

    }, [])



    return (
        <div className={`${styles.searchContainer} `}>
            <form className={`${styles.searchArea} alt-bg`}>
                <button type='submit' >sub</button>

                <input type="text" placeholder='Search for a country...' className={`${styles.homeInput} alt-bg text`} onChange={search} />

            </form>
            <div className={`${styles.drop_down_container} `}>
                <div className={`${styles.drop_down_current} alt-bg`} onClick={active}>
                    <span>{filterValue}</span>

                </div>
                <div className={`${styles.options} alt-bg`}>
                    {
                        isActive && options.map(option => {
                            return (
                                <div key={option} className={`${styles.region}`} onClick={() => FilterValue(option)}>
                                    <p>{option}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default SearchComponent
