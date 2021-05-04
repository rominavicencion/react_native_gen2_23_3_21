import React, {createContext, useContext, useState} from 'react';
import {} from 'react-native';
import colors from '../config/colors';

export const ThemeContext = createContext();

const lightTheme = {
  backgroundColor: colors.white,
  color: colors.darkBlue,
};

const darkTheme = {
  backgroundColor: colors.darkBlue,
  color: colors.white,
};

const Theme = ({children}) => {
  const [darkmodeEnabled, updateDarkMode] = useState(false);
  const [fontSize, updateFontSize] = useState(20);
  const [mainTheme, updateMainTheme] = useState(lightTheme);

  const fontSizeChange = size => updateFontSize(size);

  const toggleDarkMode = () => {
    const newTheme = !darkmodeEnabled ? darkTheme : lightTheme;

    updateMainTheme(newTheme);
    updateDarkMode(!darkmodeEnabled);
  };

  return (
    <ThemeContext.Provider
      value={{
        mainTheme,
        toggleDarkMode,
        darkmodeEnabled,
        fontSize,
        fontSizeChange,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de Theme');
  }

  return context;
};

export {useTheme};
