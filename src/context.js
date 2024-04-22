import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = function ({ children }) {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

const useAppContext = function () {
  const context = useContext(AppContext);

  if (context === undefined) throw new Error("Used outside of AppProvider");

  return context;
};

export { AppProvider, useAppContext };
