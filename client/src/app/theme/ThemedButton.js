import React from 'react'
import { ThemeContext, useThemeContext } from '../context/theme'


const ThemedButton = () => {
    const {isDarkMode} = useThemeContext()
    return (
        <button className={`btn ${isDarkMode ? 'btn--dark' : 'btn--light'}`} > 
            SWITCH THEME
        </button>
    )
}

export default ThemedButton