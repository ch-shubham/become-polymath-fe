import { ThemeContext, themes } from "context/ThemeContext";
import { useState, useContext, useMemo, useEffect } from "react";
import { analytics } from "userFirebase/config";
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics().logEvent("theme-changed", { currentTheme: theme });
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  const themeAPI = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeAPI}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
