import { createContext, useCallback, useContext, useState } from 'react'
import { apiCounty, iChildren, iCounty } from '../../shared'

interface iDataContextData {
  handleCountyData: (id: string) => void
  countyData: iCounty | undefined
  loadingCounty: boolean
}

const DataContext = createContext({} as iDataContextData)

export const DataProvider = ({ children }: iChildren) => {
  const [countyData, setCountyData] = useState<iCounty>()
  const [loadingCounty, setLoadingCounty] = useState(false)

  const handleCountyData = useCallback((id: string) => {
    setLoadingCounty(true)
    apiCounty
      .retrieve(id)
      .then((res) => setCountyData(res))
      .finally(() => setLoadingCounty(false))
  }, [])

  return (
    <DataContext.Provider
      value={{ countyData, handleCountyData, loadingCounty }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => useContext(DataContext)
