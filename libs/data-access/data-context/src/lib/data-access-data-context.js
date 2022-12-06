import { createContext, useState } from 'react';

export const DataContext = createContext({});

export function DataProvider({ children }) {
  const [counter, setCounter] = useState(1);
  return (
    <DataContext.Provider value={{ counter, setCounter }}>
      {children}
    </DataContext.Provider>
  );
}
