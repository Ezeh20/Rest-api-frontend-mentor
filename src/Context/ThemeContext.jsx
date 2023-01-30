import React from 'react'
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { }
})

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const value = { theme, setTheme }
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}