import React, { createContext, useContext, useState } from 'react'

const AppStateContext = createContext<{
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
}>({} as any)



export const AppStateProvider: React.FC = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState('Slovakia')
    const value = {
        selectedCountry,
        setSelectedCountry
      }
    return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}


export const useAppState = () => useContext(AppStateContext)