import React, { createContext, useState } from 'react'



export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const changeTheme = () => { setDarkMode(!darkMode) };

  const valoresGlobales = {
    darkMode,
    changeTheme
  };

  return (
    <ThemeContext.Provider value={valoresGlobales}>
      {children}
    </ThemeContext.Provider>
  )
}

