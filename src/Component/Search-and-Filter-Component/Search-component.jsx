import styles from './Search.module.scss'
import { IoIosSearch } from 'react-icons/io'
import { useContext } from 'react'
import { CountriesContext } from '../../Context/Countries-context'

import { RiArrowDownSLine } from "react-icons/ri";

/**
 * create an onChange function the takes the user's input the stores 
 * it in a state.
 * 
 * use the .includes() method to check if the prompt matches the existing Country
 * based on country name or Region in the case of filter by
 * 
 * @returns  a map of countries if the prompt matches else display a no Country found feed back
 */
const SearchComponent = () => {
    const { setFilterValue, setSearchValue } = useContext(CountriesContext)

    const onChangeSarch = (e) => {
        const { value } = e.target
        setSearchValue(value)
    }

    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    return (
        <div className={`${styles.searchContainer} `}>
            <div className={`${styles.searchArea} alt-bg`}>
                <IoIosSearch className={`${styles.serchIcon}`} />
                <input type="text" placeholder='Search for a country...' className={`${styles.homeInput} alt-bg text`} onChange={onChangeSarch} />
            </div>
            <div className={`${styles.drop_down_container} `}>
                <div className={`${styles.drop_down_current} alt-bg`}>
                    <span>Filter by region</span>
                    <RiArrowDownSLine />
                </div>
                <div className={`${styles.options} alt-bg`}>
                    {
                        options.map(option => {
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
