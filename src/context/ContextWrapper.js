import React from 'react'
import { ThemeProvider } from './ThemeContext'


export const ContextWrapper =({children})=>{
    return(
     <ThemeProvider>
        {children}
     </ThemeProvider>
    )
}