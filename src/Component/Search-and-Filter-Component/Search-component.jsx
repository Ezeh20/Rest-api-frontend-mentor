import React, { useContext } from 'react'
import styles from './Search.module.scss'
import { IoIosSearch } from 'react-icons/io'
import { ThemeContext } from '../../Context/ThemeContext'

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
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`${styles.searchContainer} ${theme}`}>
            <div className={`${styles.searchArea} alt-bg`}>
                <IoIosSearch  className={`${styles.serchIcon}`}/>
                <input type="text" placeholder='Search for a country...' className={`${styles.homeInput} alt-bg text`} />
            </div>
            <select name="" id="" className='bg text'></select>

        </div>
    )
}

export default SearchComponent
