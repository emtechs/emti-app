import { createContext, useContext } from 'react'
import { iChildren } from '../../shared'

interface iDataContextData {}

const DataContext = createContext({} as iDataContextData)

export const DataProvider = ({ children }: iChildren) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>
}

export const useDataContext = () => useContext(DataContext)
