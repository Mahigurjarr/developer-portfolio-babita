import React, { createContext, useState } from "react";

import { themeOptions } from "../data/themeData";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  // eslint-disable-next-line
  const index = process.env.REACT_APP_THEME;
  const [theme, setTheme] = useState(themeOptions[index]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = { theme, drawerOpen, setHandleDrawer, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
