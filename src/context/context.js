import { useContext, useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  const openSideBar = () => {
    setSideBar(true);
  };
  const closeSideBar = () => {
    setSideBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        sideBar,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


// A custom hook to make importing Context easier.

export const useGlobalContext = () => {
  return useContext(AppContext);
};
