import React, { useContext } from 'react';
import { ThemeContext } from './hooks/ThemeProvider'; // Importa el contexto
import Title from './components/Title';
import ButtonTheme from './components/ButtonTheme';

const App = () => {
  const { darkMode } = useContext(ThemeContext); // Usa el contexto aquí

  return (
    <div className={darkMode ? "container-dark" : "container-normal"}>
      <Title />
      <ButtonTheme />
    </div>
  );
};

export default App;
