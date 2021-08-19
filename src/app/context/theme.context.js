import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const useThemeContext = () => useContext(ThemeContext)

const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleThemeChange = (mode) => {
        setIsDarkMode(mode);
    };

    return (
        <ThemeContext.Provider value={{isDarkMode, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext, 
    ThemeProvider,
    useThemeContext
}