import { createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children, value }) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDictionaryData = () => {
  return useContext(DataContext);
};
