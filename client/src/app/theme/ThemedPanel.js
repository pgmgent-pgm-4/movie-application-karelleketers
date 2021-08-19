import React from 'react';
import { ThemeContext, useThemeContext } from '../context/theme';
import styled from './ThemedPanel.module.scss';

const ThemedPanel = ({children}) => {

    const {isDarkMode} = useThemeContext()
    return (
        <div className={`${isDarkMode ? styled.dark : styled.light}`}> 
            <div>
                {children}
            </div>
        </div>
    )
}

export default ThemedPanel