import React from 'react'
import Title from './components/Title'
import ButtonTheme from './components/ButtonTheme'

const container = () => {
      const { darkMode } = useContext(ThemeContext); // Usa el contexto aquí
    
  return (
    <div className={darkMode?"container-dark":container}>
        <Title/>
        <ButtonTheme/>

    </div>
  )
}

export default container