import styles from './Search.module.scss'
import { IoIosSearch } from 'react-icons/io'
import { useContext, useEffect } from 'react'
import { CountriesContext } from '../../Context/Countries-context'

import { RiArrowDownSLine } from "react-icons/ri";

/**
 * create an onChange function the takes the user's input the stores 
 * it in a state.
 * 
 */
const SearchComponent = () => {
    const { filterValue, setFilterValue, setSearchValue, isActive, setIsActive } = useContext(CountriesContext)

    const onChangeSarch = (e) => {
        const { value } = e.target
        setSearchValue(value)
    }

    const active = () => {
        setIsActive(current => !current)
    }

    const FilterValue = (option) => {
        setFilterValue(option)
        setIsActive(false)
    }
    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    return (
        <div className={`${styles.searchContainer} `}>
            <div className={`${styles.searchArea} alt-bg`}>
                <IoIosSearch className={`${styles.serchIcon}`} />
                <input type="text" placeholder='Search for a country...' className={`${styles.homeInput} alt-bg text`} onChange={onChangeSarch} />
            </div>
            <div className={`${styles.drop_down_container} `}>
                <div className={`${styles.drop_down_current} alt-bg`} onClick={active}>
                    <span>{filterValue}</span>
                    <RiArrowDownSLine />
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
