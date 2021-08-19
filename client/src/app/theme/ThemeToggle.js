import React from 'react'
import { ThemeContext, useThemeContext } from '../context/theme'

const ThemeToggle = () => {
    const {
        isDarkMode,
        handleThemeChange
    } = useThemeContext();

    return (
        <button onClick = {() => handleThemeChange(!isDarkMode)} > 
        {isDarkMode ? 'Dark Mode' : 'Light Mode'} 
        </button>

    )
}

export default ThemeToggle