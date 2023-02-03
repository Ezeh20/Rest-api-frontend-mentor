import styles from './Search.module.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { CountriesContext } from '../../Context/Countries-context'
import { RxMagnifyingGlass } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { TbChevronDown } from "react-icons/tb";


/**
 * create an onChange function the takes the user's input the stores 
 * it in a state.
 * 
 */

const SearchComponent = () => {
    const { filterValue, setSearchValue, isActive, setIsActive, searchValue, setSearch, search, setFiltered
    } = useContext(CountriesContext)

    const [clear, setClear] = useState('')

    //current state of the filter component
    const active = () => {
        setIsActive(current => !current)
    }

    //Array of Region options to be mapped
    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    //function to get the value of the input
    const onChange = (event) => {
        const value = event.target.value
        setSearchValue(value)
        setClear(value)
    }

    //This sets the searched value to a new state which when the user clicks the search icon 
    //will set that value to another state which will then be used to filter the countries array
    //This approach will reduce the number of times the app needs to rerender

    const searchCountries = () => {
        setSearch(searchValue)
    }

    //mount once the rerender when the search state changes
    useEffect(() => {
        searchCountries()
    }, [search])


    //a reset function that basically sets everything to their default states
    const clearInput = () => {
        setSearchValue("")
        setSearch("")
        setClear("")
    }

    return (
        <div className={`${styles.searchContainer} `}>
            <div className={`${styles.searchArea} alt-bg`}>
                <RxMagnifyingGlass className={styles.serchIcon} onClick={searchCountries} />
                <input type="text" placeholder='Search for a country...' value={clear} className={`${styles.homeInput} alt-bg text`} onChange={onChange} />
                {
                    searchValue.length > 0 && <VscClose className={styles.serchIcon} onClick={clearInput} />
                }
            </div>
            <div className={`${styles.drop_down_container} `}>
                <div className={`${styles.drop_down_current} alt-bg`} onClick={active}>
                    <span>{filterValue}</span>
                    <TbChevronDown />
                </div>
                <div className={`${styles.options} alt-bg`}>
                    {
                        isActive && options.map(option => {
                            return (
                                <div key={option} className={`${styles.region}`}>
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
