import { iChildren } from '../interfaces'
import { AuthProvider } from './AuthContext'
import { DataProvider } from './DataContext'
import { AppThemeProvider } from './ThemeContext'

const Providers = ({ children }: iChildren) => (
  <AppThemeProvider>
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  </AppThemeProvider>
)

export default Providers
export { useAuthContext } from './AuthContext'
export { useDataContext } from './DataContext'
export { useAppThemeContext } from './ThemeContext'
